[decimal-sdk](../README.md) / [Exports](../modules.md) / [subgraph](subgraph.md) / apollo

# Namespace: apollo

[subgraph](subgraph.md).apollo

## Table of contents

### Variables

- [apolloClient](subgraph.apollo.md#apolloclient)

### Functions

- [GET\_EXECUTIONS](subgraph.apollo.md#get_executions)
- [GET\_JOBS](subgraph.apollo.md#get_jobs)

## Variables

### apolloClient

• `Const` **apolloClient**: `ApolloClient`<`NormalizedCacheObject`\>

#### Defined in

[subgraph/apollo.ts:13](https://github.com/DecimalAt/decimal_sdk/blob/520d9e3/src/subgraph/apollo.ts#L13)

## Functions

### GET\_EXECUTIONS

▸ **GET_EXECUTIONS**(`aplClient`, `first`, `skip`): `Promise`<`Execution`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aplClient` | `ApolloClient`<`NormalizedCacheObject`\> |
| `first` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<`Execution`[]\>

#### Defined in

[subgraph/apollo.ts:35](https://github.com/DecimalAt/decimal_sdk/blob/520d9e3/src/subgraph/apollo.ts#L35)

___

### GET\_JOBS

▸ **GET_JOBS**(`aplClient`, `first`, `skip`): `Promise`<`Job`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `aplClient` | `ApolloClient`<`NormalizedCacheObject`\> |
| `first` | `number` |
| `skip` | `number` |

#### Returns

`Promise`<`Job`[]\>

#### Defined in

[subgraph/apollo.ts:22](https://github.com/DecimalAt/decimal_sdk/blob/520d9e3/src/subgraph/apollo.ts#L22)
