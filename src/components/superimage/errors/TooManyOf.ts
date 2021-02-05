import ErrorContract from './ErrorContract'

class TooManyOfError extends ErrorContract {
  constructor(
    public where: string,
    public why: string | string[],
    public solution?: string | string[]
  ) {
    super('TooManyOfError', where, why, solution)
  }
}

export default TooManyOfError
