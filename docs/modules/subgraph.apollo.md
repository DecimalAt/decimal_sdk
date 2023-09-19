[decimal-sdk](../README.md) / [Exports](../modules.md) / [subgraph](subgraph.md) / apollo

# Namespace: apollo

[subgraph](subgraph.md).apollo

## Table of contents

### Variables

- [apolloClient](subgraph.apollo.md#apolloclient)

### Functions

- [GET_EXECUTIONS](subgraph.apollo.md#get_executions)
- [GET_JOBS](subgraph.apollo.md#get_jobs)

## Variables

### apolloClient

• `Const` **apolloClient**: `ApolloClient`<`NormalizedCacheObject`\>

Sample instance of apollo client
This instance connect to decimal testnet subgraph with InMemoryCache

#### Defined in

[subgraph/apollo.ts:17](https://github.com/DecimalAt/decimal_sdk/blob/478694d/src/subgraph/apollo.ts#L17)

## Functions

### GET_EXECUTIONS

▸ **GET_EXECUTIONS**(`aplClient`, `first`, `skip`): `Promise`<`Execution`[]\>

Get all executions

#### Parameters

| Name        | Type                                     | Description                               |
| :---------- | :--------------------------------------- | :---------------------------------------- |
| `aplClient` | `ApolloClient`<`NormalizedCacheObject`\> | Any instance of apollo client             |
| `first`     | `number`                                 | number of executions to fetch             |
| `skip`      | `number`                                 | number of executions to skip (pagination) |

#### Returns

`Promise`<`Execution`[]\>

Execution - List of Executions

#### Defined in

[subgraph/apollo.ts:53](https://github.com/DecimalAt/decimal_sdk/blob/478694d/src/subgraph/apollo.ts#L53)

---

### GET_JOBS

▸ **GET_JOBS**(`aplClient`, `first`, `skip`): `Promise`<`Job`[]\>

Get all available jobs

#### Parameters

| Name        | Type                                     | Description                         |
| :---------- | :--------------------------------------- | :---------------------------------- |
| `aplClient` | `ApolloClient`<`NormalizedCacheObject`\> | Any instance of apollo client       |
| `first`     | `number`                                 | number of jobs to fetch             |
| `skip`      | `number`                                 | number of jobs to skip (pagination) |

#### Returns

`Promise`<`Job`[]\>

Jobs - List of Jobs

#### Defined in

[subgraph/apollo.ts:33](https://github.com/DecimalAt/decimal_sdk/blob/478694d/src/subgraph/apollo.ts#L33)
