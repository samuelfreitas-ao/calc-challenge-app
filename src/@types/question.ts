export enum IOperator {
  plus = '+',
  multiply = 'x',
  division = '/',
  minus = '-',
}
export type IQuestion = {
  value1: number
  value2: number
  operator: IOperator
  answer: number
  rightAnswer: number

  isRight: boolean
  seconds: number
  time: string

  date: Date
}
