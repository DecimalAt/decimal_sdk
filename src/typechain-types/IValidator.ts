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

export interface IValidatorInterface extends Interface {
  getFunction(nameOrSignature: "initialize" | "validate"): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "DataSubmitted" | "ParamUpdated",
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [BigNumberish, BigNumberish, BytesLike],
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;
}

export namespace DataSubmittedEvent {
  export type InputTuple = [
    jobId: BigNumberish,
    validationIndex: BigNumberish,
    data: BytesLike,
  ];
  export type OutputTuple = [
    jobId: bigint,
    validationIndex: bigint,
    data: string,
  ];
  export interface OutputObject {
    jobId: bigint;
    validationIndex: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ParamUpdatedEvent {
  export type InputTuple = [
    jobId: BigNumberish,
    validationIndex: BigNumberish,
    key: string,
    value: string,
  ];
  export type OutputTuple = [
    jobId: bigint,
    validationIndex: bigint,
    key: string,
    value: string,
  ];
  export interface OutputObject {
    jobId: bigint;
    validationIndex: bigint;
    key: string;
    value: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IValidator extends BaseContract {
  connect(runner?: ContractRunner | null): IValidator;
  waitForDeployment(): Promise<this>;

  interface: IValidatorInterface;

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

  initialize: TypedContractMethod<
    [jobId: BigNumberish, validationIndex: BigNumberish, _data: BytesLike],
    [boolean],
    "nonpayable"
  >;

  validate: TypedContractMethod<
    [jobId: BigNumberish, validationIndex: BigNumberish, _data: BytesLike],
    [boolean],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment,
  ): T;

  getFunction(
    nameOrSignature: "initialize",
  ): TypedContractMethod<
    [jobId: BigNumberish, validationIndex: BigNumberish, _data: BytesLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "validate",
  ): TypedContractMethod<
    [jobId: BigNumberish, validationIndex: BigNumberish, _data: BytesLike],
    [boolean],
    "nonpayable"
  >;

  getEvent(
    key: "DataSubmitted",
  ): TypedContractEvent<
    DataSubmittedEvent.InputTuple,
    DataSubmittedEvent.OutputTuple,
    DataSubmittedEvent.OutputObject
  >;
  getEvent(
    key: "ParamUpdated",
  ): TypedContractEvent<
    ParamUpdatedEvent.InputTuple,
    ParamUpdatedEvent.OutputTuple,
    ParamUpdatedEvent.OutputObject
  >;

  filters: {
    "DataSubmitted(uint256,uint256,bytes)": TypedContractEvent<
      DataSubmittedEvent.InputTuple,
      DataSubmittedEvent.OutputTuple,
      DataSubmittedEvent.OutputObject
    >;
    DataSubmitted: TypedContractEvent<
      DataSubmittedEvent.InputTuple,
      DataSubmittedEvent.OutputTuple,
      DataSubmittedEvent.OutputObject
    >;

    "ParamUpdated(uint256,uint256,string,string)": TypedContractEvent<
      ParamUpdatedEvent.InputTuple,
      ParamUpdatedEvent.OutputTuple,
      ParamUpdatedEvent.OutputObject
    >;
    ParamUpdated: TypedContractEvent<
      ParamUpdatedEvent.InputTuple,
      ParamUpdatedEvent.OutputTuple,
      ParamUpdatedEvent.OutputObject
    >;
  };
}
