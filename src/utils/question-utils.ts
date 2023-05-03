import { IOperator, IQuestion } from '../@types'
import { LocalStorageUtils } from './local-storage-utils'
import { NumberUtils } from './number-utils'

export class QuestionUtils {
  static async add(question: IQuestion): Promise<void> {
    const list = await this.getAll()
    const newList = [...list, question]
    await LocalStorageUtils.setItem('question', JSON.stringify(newList))
  }

  static async getAll(): Promise<IQuestion[]> {
    const questionStorage = await LocalStorageUtils.getItem('question')
    const questionList = questionStorage ? JSON.parse(questionStorage) : []

    return questionList
  }

  static async remove(question: IQuestion): Promise<void> {
    const list = await this.getAll()
    const newList = list.filter(
      (quest) =>
        new Date(quest.date).getTime() != new Date(question.date).getTime()
    )
    await LocalStorageUtils.setItem('question', JSON.stringify(newList))
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
