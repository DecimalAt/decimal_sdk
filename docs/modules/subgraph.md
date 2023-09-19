[decimal-sdk](../README.md) / [Exports](../modules.md) / subgraph

# Namespace: subgraph

## Table of contents

### Namespaces

- [apollo](subgraph.apollo.md)

### Variables

- [queries](subgraph.md#queries)

### Functions

- [getExecutions](subgraph.md#getexecutions)
- [getJobs](subgraph.md#getjobs)
- [name](subgraph.md#name)
- [queryData](subgraph.md#querydata)

## Variables

### queries

• `Const` **queries**: `__module` = `query`

#### Defined in

[subgraph/index.ts:56](https://github.com/DecimalAt/decimal_sdk/blob/520d9e3/src/subgraph/index.ts#L56)

## Functions

### getExecutions

▸ **getExecutions**(`first`, `skip`): `Promise`<`Execution`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `first` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<`Execution`[]\>

#### Defined in

[subgraph/index.ts:46](https://github.com/DecimalAt/decimal_sdk/blob/520d9e3/src/subgraph/index.ts#L46)

___

### getJobs

▸ **getJobs**(`first`, `skip`): `Promise`<`Job`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `first` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<`Job`[]\>

#### Defined in

[subgraph/index.ts:38](https://github.com/DecimalAt/decimal_sdk/blob/520d9e3/src/subgraph/index.ts#L38)

___

### name

▸ **name**(): `string`

#### Returns

`string`

#### Defined in

[subgraph/index.ts:11](https://github.com/DecimalAt/decimal_sdk/blob/520d9e3/src/subgraph/index.ts#L11)

___

### queryData

▸ **queryData**(`query`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[subgraph/index.ts:20](https://github.com/DecimalAt/decimal_sdk/blob/520d9e3/src/subgraph/index.ts#L20)
