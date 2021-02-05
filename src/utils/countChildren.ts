import React, { ReactElement, ReactNode } from 'react'
import BadUsageError from '../components/superimage/errors/BadUsage'
import TooManyOfError from '../components/superimage/errors/TooManyOf'

export const countChildrenByName = (
  children: ReactNode[],
  name: string
): number => {
  let count = 0

  React.Children.forEach(children, child => {
    let c = child as ReactElement
    if (!c.type) return
    let splitted = c.type.toString().split(' ')
    if (splitted[0] === 'class' && splitted[1] === name) count++
  })

  return count
}

const badUsageError = new BadUsageError(
  '[assertChildAmount]',
  [
    'The parameter {amount} should be either of type number or string.',
    'If typeof string, it should always start with < or >',
    'If typeof string, it should be at least 2 characters long',
  ],
  'Check the provided {amount}'
)

const tooManyOfError = new TooManyOfError(
  '[assertChildAmount]',
  'The number of children is not what was expected'
)

export const assertChildAmount = (
  children: ReactNode | ReactNode[],
  name: string,
  amount: number | string
): number | never => {
  if (typeof amount === 'string') {
    if (amount.length < 2) throw badUsageError

    let greaterThan: boolean
    switch (amount[0]) {
      case '<':
        greaterThan = false
        break
      case '>':
        greaterThan = true
        break
      default:
        throw badUsageError
    }
  }

  let counted: number
  if (Array.isArray(children)) {
    counted = countChildrenByName(children, name)
  } else {
    counted = countChildrenByName([children], name)
  }

  if (counted > amount) throw tooManyOfError

  return counted
}
