import { IOperator, IQuestion } from '../@types'

export class QuestionUtils {
  static quetions: IQuestion[] = []

  static add(question: IQuestion): void {
    this.quetions.push(question)
  }

  static execCalc(value1: number, value2: number, operator: IOperator): number {
    switch (operator) {
      case IOperator.plus:
        return value1 + value2
      case IOperator.minus:
        return value1 - value2
      case IOperator.multiply:
        return value1 * value2
      default:
        return Number((value1 / value2).toFixed(2))
    }
  }
}
