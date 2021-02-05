abstract class ErrorContract extends Error {
  message: string
  constructor(
    public type: string,
    public where: string,
    public why: string | string[],
    public solution?: string | string[]
  ) {
    super()

    this.message = this.buildMessage()
  }

  _parseInput(input: string | string[], heading: string): string {
    let plural = false
    let body = ''

    if (Array.isArray(input)) {
      if (input.length > 1) plural = true

      body = input.reduce((accumulator, current, index) => {
        accumulator += `\n${index + 1}. ${current}`
        return accumulator
      }, body)
    } else {
      body += '\n' + input
    }

    return `\n${heading}${plural ? 's' : ''}:${body}`
  }

  buildMessage(): string {
    let title = `${this.type} happened in ${this.where}`

    let description = this._parseInput(this.why, 'For the following reason')

    let solution = this.solution
      ? this._parseInput(this.solution, 'Suggested solution')
      : ''

    return title + '\n' + description + '\n' + solution
  }
}

export default ErrorContract
