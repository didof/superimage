import ErrorContract from './ErrorContract'

class BadUsageError extends ErrorContract {
  constructor(
    public where: string,
    public why: string | string[],
    public solution: string | string[]
  ) {
    super('BadUsageError', where, why, solution)
  }
}

export default BadUsageError
