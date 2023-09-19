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

All pre-defined queries

#### Defined in

[subgraph/index.ts:69](https://github.com/DecimalAt/decimal_sdk/blob/478694d/src/subgraph/index.ts#L69)

## Functions

### getExecutions

▸ **getExecutions**(`first`, `skip`): `Promise`<`Execution`[]\>

Get all executions

#### Parameters

| Name    | Type     | Description                               |
| :------ | :------- | :---------------------------------------- |
| `first` | `number` | number of executions to fetch             |
| `skip`  | `number` | number of executions to skip (pagination) |

#### Returns

`Promise`<`Execution`[]\>

Execution - List of Executions

#### Defined in

[subgraph/index.ts:56](https://github.com/DecimalAt/decimal_sdk/blob/478694d/src/subgraph/index.ts#L56)

---

### getJobs

▸ **getJobs**(`first`, `skip`): `Promise`<`Job`[]\>

Get all available jobs

#### Parameters

| Name    | Type     | Description                         |
| :------ | :------- | :---------------------------------- |
| `first` | `number` | number of jobs to fetch             |
| `skip`  | `number` | number of jobs to skip (pagination) |

#### Returns

`Promise`<`Job`[]\>

Jobs - List of Jobs

#### Defined in

[subgraph/index.ts:42](https://github.com/DecimalAt/decimal_sdk/blob/478694d/src/subgraph/index.ts#L42)

---

### name

▸ **name**(): `string`

#### Returns

`string`

#### Defined in

[subgraph/index.ts:4](https://github.com/DecimalAt/decimal_sdk/blob/478694d/src/subgraph/index.ts#L4)

---

### queryData

▸ **queryData**(`query`): `Promise`<`any`\>

Execute a graphql query

#### Parameters

| Name    | Type     | Description |
| :------ | :------- | :---------- |
| `query` | `string` | query       |

#### Returns

`Promise`<`any`\>

result

#### Defined in

[subgraph/index.ts:18](https://github.com/DecimalAt/decimal_sdk/blob/478694d/src/subgraph/index.ts#L18)
