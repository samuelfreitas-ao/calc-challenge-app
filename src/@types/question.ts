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
  correctAnswer: number

  isCorrect: boolean
  seconds: number
  time: string

  date: Date
}
