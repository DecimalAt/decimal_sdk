import { ethers } from "ethers";
import { attestor, jobManager } from "../src";
const { DecimalJobManager } = jobManager;
import { config } from "dotenv";

config();

describe.only("Attestor Testing", function () {
  const attestation_verifier_endpoint = "http://13.201.207.60:1400";
  const attestation_utility_endpoint = "http://13.232.137.83:1500";

  let attestor_tool: attestor.Attestor;
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  const jobManagerAddress: string = process.env.JOB_MANAGER_ADDRESS!;
  const tokenAddress: string = process.env.TOKEN_ADDRESS!;

  const jobManager = new DecimalJobManager(
    wallet,
    jobManagerAddress,
    tokenAddress,
  );

  beforeEach(async () => {
    attestor_tool = new attestor.Attestor(
      attestation_utility_endpoint,
      attestation_verifier_endpoint,
    );
  });

  it.skip("Create Job", async () => {
    const attestation = await attestor_tool.getAttestation();
    console.log({ attestation });

    const pcrs = attestor.Attestor.getPcrsBytesFromAttestation(
      attestation.attestation_document,
    );
    console.log({ pcrs });

    const imageId = attestor.Attestor.getImageIdFromAttestation(
      attestation.attestation_document,
    );
    console.log({ imageId });

    const input_bytes = "0x1234";
    const paymentPerSecond = "1000";
    const maxBaseFee = "2000";
    const maxPriorityFee = "3000";
    const gasRefundAmount = "400000";
    const amount = "5000";
    const job_create_transaction = await jobManager.createJob(
      [],
      "optional ig",
      attestor.Attestor.getPCRsFromAttestation(
        attestation.attestation_document,
      ),
      input_bytes,
      paymentPerSecond,
      maxBaseFee,
      maxPriorityFee,
      gasRefundAmount,
      amount,
      { value: gasRefundAmount },
    );

    const receipt = await job_create_transaction.wait();
    console.log("Job Creation Tx Receipt", receipt?.hash);
  });

  it.skip("Whitelist Enclave Image", async () => {
    const attestation = await attestor_tool.getAttestation();
    console.log({ attestation });

    const pcrs = attestor.Attestor.getPcrsBytesFromAttestation(
      attestation.attestation_document,
    );
    console.log({ pcrs });

    const imageId = attestor.Attestor.getImageIdFromAttestation(
      attestation.attestation_document,
    );
    console.log({ imageId });
    console.log("admin used", await wallet.getAddress());

    const image_whitelist_transaction = await jobManager.whitelistImage(
      attestor.Attestor.getPCRsFromAttestation(
        attestation.attestation_document,
      ),
    );

    const receipt = await image_whitelist_transaction.wait();
    console.log("Image Whitelist Tx Receipt", receipt?.hash);
  });

  it.only("Whitelist Keys", async () => {
    const attestation = await attestor_tool.getAttestation();
    console.log({ attestation });

    const pcrs = attestor.Attestor.getPcrsBytesFromAttestation(
      attestation.attestation_document,
    );
    console.log({ pcrs });

    const imageId = attestor.Attestor.getImageIdFromAttestation(
      attestation.attestation_document,
    );
    console.log({ imageId });
    console.log("admin used", await wallet.getAddress());

    const key_whitelist_transaction = await jobManager.whitelistKey(
      "",
      attestor.Attestor.getImageIdFromAttestation(
        attestation.attestation_document,
      ),
    );

    const receipt = await key_whitelist_transaction.wait();
    console.log("Key Whitelist Tx Receipt", receipt?.hash);
  });
});
