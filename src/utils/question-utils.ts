import { IOperator, IQuestion } from '../@types'

export class QuestionUtils {
  static quetions: IQuestion[] = []

  static add(question: IQuestion) {
    this.quetions.push(question)
  }

  static execCalc(value1: number, value2: number, operator: IOperator) {
    switch (operator) {
      case IOperator.plus:
        return this.sum(value1, value2)
      case IOperator.minus:
        return this.minus(value1, value2)
      case IOperator.multiply:
        return this.multiply(value1, value2)
      default:
        return this.divide(value1, value2)
    }
  }

  private static sum(value1: number, value2: number) {
    return value1 + value2
  }

  private static minus(value1: number, value2: number) {
    return value1 - value2
  }

  private static multiply(value1: number, value2: number) {
    return value1 * value2
  }

  private static divide(value1: number, value2: number) {
    return value1 / value2
  }
}
