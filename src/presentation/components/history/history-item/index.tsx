import { Pressable, View } from "react-native"

import Styles from './styles'

import { IQuestion } from "../../../../@types"
import { useApp } from "../../../../hooks"
import { DateUtils, QuestionUtils } from "../../../../utils"
import { THEME } from "../../../styles/theme"
import {
  Text,
  IconClock,
  IconThumbsDown,
  IconThumbsUp,
  IconTrash,
  SimpleButton
} from "../../"

type HistoryItemProps = {
  history: IQuestion
  hidenButtonDelete?: boolean
  index?: number
}

export function HistoryItem ({ history, hidenButtonDelete, index }: HistoryItemProps) {
  const { setHistoryList } = useApp()
  const onRemove = async (quest: IQuestion) => {
    await QuestionUtils.remove(quest)

    const histories = await QuestionUtils.getAll()
    setHistoryList(histories)
  }
  return (
    <Pressable style={Styles.container}>
      <View style={Styles.operationBox}>
        {index && <Text text={`(${index})`} />}
        <TextBox text={history.value1.toString()} />
        <TextBox text={history.operator} />
        <TextBox text={history.value2.toString()} />
        <TextBox text={'='} />
        <TextBox text={history.answer.toString()} />
        {history.isCorrect ?
          <IconThumbsUp weight='fill' color={THEME.colors.green[700]} /> :
          <>
            <IconThumbsDown weight='fill' color={THEME.colors.red[700]} />
            <Text
              text={`Resposta: ${history.correctAnswer}`}
              style={Styles.rightAnswer}
            />
          </>
        }
        {!hidenButtonDelete &&
          <View style={Styles.deleteButton}>
            <SimpleButton onPress={() => onRemove(history)}>
              <IconTrash weight='fill' color={THEME.colors.gray[800]} />
            </SimpleButton>
          </View>
        }
      </View>
      <View>
        <Text text={`Tempo de resposta: ${history.time}`} />
      </View>
      <View style={Styles.date}>
        <IconClock size={16} />
        <Text text={DateUtils.getDate(new Date(history.date))} />
      </View>
    </Pressable>
  )
}

type TextBoxProps = {
  text: string
}

function TextBox ({ text }: TextBoxProps) {
  return (
    <Text text={text}
      style={Styles.textBox}
    />
  )
}