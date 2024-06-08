import { AbstractSigner } from "ethers";
import { AddressLike } from "ethers";
import {
  AttestationAuther,
  IERC20,
  IERC20__factory,
  JobManager,
  JobManager__factory,
} from "../typechain-types";
import { ContractTransactionResponse, Overrides } from "ethers";
import { IJobManager } from "../typechain-types/JobManager";
import { BytesLike } from "ethers";
import { BigNumberish } from "ethers";
import BigNumber from "bignumber.js";

export class DecimalJobManager {
  private signer: AbstractSigner;
  private jobManager: JobManager;
  private tokenInstance: IERC20;

  constructor(
    signer: AbstractSigner,
    jobManager: AddressLike,
    tokenAddress: AddressLike,
  ) {
    this.signer = signer;
    this.jobManager = JobManager__factory.connect(
      jobManager.toString(),
      this.signer,
    );

    this.tokenInstance = IERC20__factory.connect(
      tokenAddress.toString(),
      this.signer,
    );
  }

  public async whitelistImage(
    image: AttestationAuther.EnclaveImageStruct,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    return this.jobManager.whitelistEnclaveImage(image, { ...options });
  }

  public async whitelistKey(
    key: BytesLike,
    imageId: BytesLike,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    return this.jobManager.whitelistEnclaveKey(key, imageId, { ...options });
  }

  public async createJob(
    validation: IJobManager.ValidationSetupStruct[],
    enclave_url: string,
    image_struct: IJobManager.ImageStruct,
    input: BytesLike,
    paymentPerSecond: BigNumberish,
    maxBaseFee: BigNumberish,
    maxPriorityFee: BigNumberish,
    gasRefundAmount: BigNumberish,
    amount: BigNumberish,
    options?: Overrides,
  ): Promise<ContractTransactionResponse> {
    const _allowance = await this.tokenInstance.allowance(
      await this.signer.getAddress(),
      await this.jobManager.getAddress(),
    );
    const expectedAllowance = new BigNumber(amount.toString());
    const currentAllowance = new BigNumber(_allowance.toString());

    if (currentAllowance.lt(expectedAllowance)) {
      console.log("Insufficient Allowance, trying to approve the token");
      const tx = await this.tokenInstance.approve(
        await this.jobManager.getAddress(),
        expectedAllowance.multipliedBy(10).toFixed(0),
      );
      const receipt = await tx.wait();
      console.log("Allowance Transaction Receipt", receipt.hash);
    }

    return this.jobManager.createJob(
      validation,
      enclave_url,
      image_struct,
      input,
      paymentPerSecond,
      maxBaseFee,
      maxPriorityFee,
      gasRefundAmount,
      amount,
      { ...options },
    );
  }
}
