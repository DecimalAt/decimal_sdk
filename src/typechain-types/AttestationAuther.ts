/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace AttestationAuther {
  export type EnclaveImageStruct = {
    PCR0: BytesLike;
    PCR1: BytesLike;
    PCR2: BytesLike;
  };

  export type EnclaveImageStructOutput = [
    PCR0: string,
    PCR1: string,
    PCR2: string,
  ] & { PCR0: string; PCR1: string; PCR2: string };
}

export interface AttestationAutherInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ATTESTATION_MAX_AGE"
      | "ATTESTATION_VERIFIER"
      | "getVerifiedKey"
      | "getWhitelistedImage"
      | "verifyKey",
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "EnclaveImageRevoked"
      | "EnclaveImageWhitelisted"
      | "EnclaveKeyRevoked"
      | "EnclaveKeyVerified"
      | "EnclaveKeyWhitelisted",
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ATTESTATION_MAX_AGE",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "ATTESTATION_VERIFIER",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "getVerifiedKey",
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelistedImage",
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "verifyKey",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
    ],
  ): string;

  decodeFunctionResult(
    functionFragment: "ATTESTATION_MAX_AGE",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "ATTESTATION_VERIFIER",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVerifiedKey",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelistedImage",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "verifyKey", data: BytesLike): Result;
}

export namespace EnclaveImageRevokedEvent {
  export type InputTuple = [imageId: BytesLike];
  export type OutputTuple = [imageId: string];
  export interface OutputObject {
    imageId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnclaveImageWhitelistedEvent {
  export type InputTuple = [
    imageId: BytesLike,
    PCR0: BytesLike,
    PCR1: BytesLike,
    PCR2: BytesLike,
  ];
  export type OutputTuple = [
    imageId: string,
    PCR0: string,
    PCR1: string,
    PCR2: string,
  ];
  export interface OutputObject {
    imageId: string;
    PCR0: string;
    PCR1: string;
    PCR2: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnclaveKeyRevokedEvent {
  export type InputTuple = [enclavePubKey: BytesLike];
  export type OutputTuple = [enclavePubKey: string];
  export interface OutputObject {
    enclavePubKey: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnclaveKeyVerifiedEvent {
  export type InputTuple = [enclavePubKey: BytesLike, imageId: BytesLike];
  export type OutputTuple = [enclavePubKey: string, imageId: string];
  export interface OutputObject {
    enclavePubKey: string;
    imageId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnclaveKeyWhitelistedEvent {
  export type InputTuple = [enclavePubKey: BytesLike, imageId: BytesLike];
  export type OutputTuple = [enclavePubKey: string, imageId: string];
  export interface OutputObject {
    enclavePubKey: string;
    imageId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AttestationAuther extends BaseContract {
  connect(runner?: ContractRunner | null): AttestationAuther;
  waitForDeployment(): Promise<this>;

  interface: AttestationAutherInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent,
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent,
  ): Promise<this>;

  ATTESTATION_MAX_AGE: TypedContractMethod<[], [bigint], "view">;

  ATTESTATION_VERIFIER: TypedContractMethod<[], [string], "view">;

  getVerifiedKey: TypedContractMethod<[_key: AddressLike], [string], "view">;

  getWhitelistedImage: TypedContractMethod<
    [_imageId: BytesLike],
    [AttestationAuther.EnclaveImageStructOutput],
    "view"
  >;

  verifyKey: TypedContractMethod<
    [
      signature: BytesLike,
      enclavePubKey: BytesLike,
      imageId: BytesLike,
      enclaveCPUs: BigNumberish,
      enclaveMemory: BigNumberish,
      timestampInMilliseconds: BigNumberish,
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment,
  ): T;

  getFunction(
    nameOrSignature: "ATTESTATION_MAX_AGE",
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ATTESTATION_VERIFIER",
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getVerifiedKey",
  ): TypedContractMethod<[_key: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getWhitelistedImage",
  ): TypedContractMethod<
    [_imageId: BytesLike],
    [AttestationAuther.EnclaveImageStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "verifyKey",
  ): TypedContractMethod<
    [
      signature: BytesLike,
      enclavePubKey: BytesLike,
      imageId: BytesLike,
      enclaveCPUs: BigNumberish,
      enclaveMemory: BigNumberish,
      timestampInMilliseconds: BigNumberish,
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "EnclaveImageRevoked",
  ): TypedContractEvent<
    EnclaveImageRevokedEvent.InputTuple,
    EnclaveImageRevokedEvent.OutputTuple,
    EnclaveImageRevokedEvent.OutputObject
  >;
  getEvent(
    key: "EnclaveImageWhitelisted",
  ): TypedContractEvent<
    EnclaveImageWhitelistedEvent.InputTuple,
    EnclaveImageWhitelistedEvent.OutputTuple,
    EnclaveImageWhitelistedEvent.OutputObject
  >;
  getEvent(
    key: "EnclaveKeyRevoked",
  ): TypedContractEvent<
    EnclaveKeyRevokedEvent.InputTuple,
    EnclaveKeyRevokedEvent.OutputTuple,
    EnclaveKeyRevokedEvent.OutputObject
  >;
  getEvent(
    key: "EnclaveKeyVerified",
  ): TypedContractEvent<
    EnclaveKeyVerifiedEvent.InputTuple,
    EnclaveKeyVerifiedEvent.OutputTuple,
    EnclaveKeyVerifiedEvent.OutputObject
  >;
  getEvent(
    key: "EnclaveKeyWhitelisted",
  ): TypedContractEvent<
    EnclaveKeyWhitelistedEvent.InputTuple,
    EnclaveKeyWhitelistedEvent.OutputTuple,
    EnclaveKeyWhitelistedEvent.OutputObject
  >;

  filters: {
    "EnclaveImageRevoked(bytes32)": TypedContractEvent<
      EnclaveImageRevokedEvent.InputTuple,
      EnclaveImageRevokedEvent.OutputTuple,
      EnclaveImageRevokedEvent.OutputObject
    >;
    EnclaveImageRevoked: TypedContractEvent<
      EnclaveImageRevokedEvent.InputTuple,
      EnclaveImageRevokedEvent.OutputTuple,
      EnclaveImageRevokedEvent.OutputObject
    >;

    "EnclaveImageWhitelisted(bytes32,bytes,bytes,bytes)": TypedContractEvent<
      EnclaveImageWhitelistedEvent.InputTuple,
      EnclaveImageWhitelistedEvent.OutputTuple,
      EnclaveImageWhitelistedEvent.OutputObject
    >;
    EnclaveImageWhitelisted: TypedContractEvent<
      EnclaveImageWhitelistedEvent.InputTuple,
      EnclaveImageWhitelistedEvent.OutputTuple,
      EnclaveImageWhitelistedEvent.OutputObject
    >;

    "EnclaveKeyRevoked(bytes)": TypedContractEvent<
      EnclaveKeyRevokedEvent.InputTuple,
      EnclaveKeyRevokedEvent.OutputTuple,
      EnclaveKeyRevokedEvent.OutputObject
    >;
    EnclaveKeyRevoked: TypedContractEvent<
      EnclaveKeyRevokedEvent.InputTuple,
      EnclaveKeyRevokedEvent.OutputTuple,
      EnclaveKeyRevokedEvent.OutputObject
    >;

    "EnclaveKeyVerified(bytes,bytes32)": TypedContractEvent<
      EnclaveKeyVerifiedEvent.InputTuple,
      EnclaveKeyVerifiedEvent.OutputTuple,
      EnclaveKeyVerifiedEvent.OutputObject
    >;
    EnclaveKeyVerified: TypedContractEvent<
      EnclaveKeyVerifiedEvent.InputTuple,
      EnclaveKeyVerifiedEvent.OutputTuple,
      EnclaveKeyVerifiedEvent.OutputObject
    >;

    "EnclaveKeyWhitelisted(bytes,bytes32)": TypedContractEvent<
      EnclaveKeyWhitelistedEvent.InputTuple,
      EnclaveKeyWhitelistedEvent.OutputTuple,
      EnclaveKeyWhitelistedEvent.OutputObject
    >;
    EnclaveKeyWhitelisted: TypedContractEvent<
      EnclaveKeyWhitelistedEvent.InputTuple,
      EnclaveKeyWhitelistedEvent.OutputTuple,
      EnclaveKeyWhitelistedEvent.OutputObject
    >;
  };
}
