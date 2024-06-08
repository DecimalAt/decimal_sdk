/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "AccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AccessControlEnumerable__factory>;
    getContractFactory(
      name: "AttestationAuther",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AttestationAuther__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "IAccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IAccessControlEnumerable__factory>;
    getContractFactory(
      name: "IAttestationVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IAttestationVerifier__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IValidator__factory>;
    getContractFactory(
      name: "JobManager",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.JobManager__factory>;

    getContractAt(
      name: "AccessControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "AccessControlEnumerable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.AccessControlEnumerable>;
    getContractAt(
      name: "AttestationAuther",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.AttestationAuther>;
    getContractAt(
      name: "ERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IAccessControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "IAccessControlEnumerable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IAccessControlEnumerable>;
    getContractAt(
      name: "IAttestationVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IAttestationVerifier>;
    getContractAt(
      name: "IERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IValidator",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IValidator>;
    getContractAt(
      name: "JobManager",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.JobManager>;

    deployContract(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.AccessControl>;
    deployContract(
      name: "AccessControlEnumerable",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.AccessControlEnumerable>;
    deployContract(
      name: "AttestationAuther",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.AttestationAuther>;
    deployContract(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IAccessControl>;
    deployContract(
      name: "IAccessControlEnumerable",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IAccessControlEnumerable>;
    deployContract(
      name: "IAttestationVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IAttestationVerifier>;
    deployContract(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "IValidator",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IValidator>;
    deployContract(
      name: "JobManager",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.JobManager>;

    deployContract(
      name: "AccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.AccessControl>;
    deployContract(
      name: "AccessControlEnumerable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.AccessControlEnumerable>;
    deployContract(
      name: "AttestationAuther",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.AttestationAuther>;
    deployContract(
      name: "ERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IAccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IAccessControl>;
    deployContract(
      name: "IAccessControlEnumerable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IAccessControlEnumerable>;
    deployContract(
      name: "IAttestationVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IAttestationVerifier>;
    deployContract(
      name: "IERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "IValidator",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IValidator>;
    deployContract(
      name: "JobManager",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.JobManager>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer,
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<ethers.Contract>;
  }
}
