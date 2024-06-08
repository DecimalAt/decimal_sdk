import { attestor } from "../src";
import { expect } from "chai";

describe.only("Attestor Testing", function () {
  const attestation_verifier_endpoint = "http://13.201.207.60:1400";
  const attestation_utility_endpoint = "http://13.201.131.193:1500";

  let attestor_tool: attestor.Attestor;

  beforeEach(async () => {
    attestor_tool = new attestor.Attestor(
      attestation_utility_endpoint,
      attestation_verifier_endpoint,
    );
  });

  it("Should build the attestation", async () => {
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
  });
});
