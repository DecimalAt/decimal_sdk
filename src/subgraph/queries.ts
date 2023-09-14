export const getJobs = (first: number, skip: number): string => {
  return `
       {
  jobs(first: ${first.toString()}, skip: ${skip.toString()}) {
    id
    creator
    paymentPerExecution
    executions {
      id
      executor
      payment
      timestamp
      txHash
      data
    }
    validations {
      id
      index
      validationAddress
      validationFunction
      params {
        id
        index
        key
        value
      }
    }
  }
}
`;
};

export const getExecutions = (first: number, skip: number): string => {
  return `
{
  executions (first: ${first.toString()}, skip: ${skip.toString()}) {
    id,
    job {
      id
      creator
      params {
        id
        index
        key
        value
      }
    }
    executor
    payment
    timestamp
    txHash
    data
  }
}
`;
};
