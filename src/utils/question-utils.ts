import { IOperator, IQuestion } from '../@types'
import { NumberUtils } from './number-utils'

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

  static generateQuestion() {
    const operators = [
      IOperator.plus,
      IOperator.multiply,
      IOperator.division,
      IOperator.minus,
    ]

    return {
      value1: NumberUtils.random(1, 10),
      value2: NumberUtils.random(1, 10),
      operator: operators[NumberUtils.random(0, 3)],
    } as IQuestion
  }
}
