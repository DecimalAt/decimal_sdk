[decimal-sdk](../README.md) / [Exports](../modules.md) / [builder](../modules/builder.md) / Builder

# Class: Builder

[builder](../modules/builder.md).Builder

Represent Builder, which is used to create a Job

## Table of contents

### Constructors

- [constructor](builder.Builder.md#constructor)

### Properties

- [operations](builder.Builder.md#operations)
- [varMap](builder.Builder.md#varmap)

### Methods

- [addOperation](builder.Builder.md#addoperation)
- [build](builder.Builder.md#build)
- [isVariable](builder.Builder.md#isvariable)
- [isVariablePresentInStore](builder.Builder.md#isvariablepresentinstore)
- [verify](builder.Builder.md#verify)

## Constructors

### constructor

• **new Builder**()

#### Defined in

[builder/index.ts:30](https://github.com/DecimalAt/decimal_sdk/blob/6ba5e75/src/builder/index.ts#L30)

## Properties

### operations

• `Private` **operations**: `operation`[] = `[]`

#### Defined in

[builder/index.ts:26](https://github.com/DecimalAt/decimal_sdk/blob/6ba5e75/src/builder/index.ts#L26)

___

### varMap

• `Private` **varMap**: `Map`<`string`, `operation`\>

#### Defined in

[builder/index.ts:28](https://github.com/DecimalAt/decimal_sdk/blob/6ba5e75/src/builder/index.ts#L28)

## Methods

### addOperation

▸ **addOperation**(`op`): [`Builder`](builder.Builder.md)

Add a new operation to the Job

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | `operation` |

#### Returns

[`Builder`](builder.Builder.md)

Builder - Instance of the builder

#### Defined in

[builder/index.ts:38](https://github.com/DecimalAt/decimal_sdk/blob/6ba5e75/src/builder/index.ts#L38)

___

### build

▸ **build**(): `operation`[]

Builds the complete operation

#### Returns

`operation`[]

operations - Complete operation sequence

#### Defined in

[builder/index.ts:52](https://github.com/DecimalAt/decimal_sdk/blob/6ba5e75/src/builder/index.ts#L52)

___

### isVariable

▸ `Private` **isVariable**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[builder/index.ts:122](https://github.com/DecimalAt/decimal_sdk/blob/6ba5e75/src/builder/index.ts#L122)

___

### isVariablePresentInStore

▸ `Private` **isVariablePresentInStore**(`a`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Variable`](../interfaces/operators.Variable.md) |

#### Returns

`boolean`

#### Defined in

[builder/index.ts:118](https://github.com/DecimalAt/decimal_sdk/blob/6ba5e75/src/builder/index.ts#L118)

___

### verify

▸ `Private` **verify**(`op`): `operation`

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | `operation` |

#### Returns

`operation`

#### Defined in

[builder/index.ts:56](https://github.com/DecimalAt/decimal_sdk/blob/6ba5e75/src/builder/index.ts#L56)
