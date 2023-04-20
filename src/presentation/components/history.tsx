import { View, Pressable } from 'react-native'
import { X } from "phosphor-react-native"

import { Text } from "./text"
import { THEME } from '../styles/theme'
import { ArrayUtils, QuestionUtils } from '../../utils'
import { IQuestion } from '../../@types'

type Props = {
  onRemove: (question: IQuestion) => void
}
export function History ({ onRemove }: Props) {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        rowGap: 4,
        marginTop: 8,
        backgroundColor: THEME.colors.gray[200],
        padding: 4
      }}
    >
      <Text text={`Histórico (${QuestionUtils.quetions.length})`}
        style={{ minWidth: 15, fontFamily: THEME.fonts.heading, fontSize: THEME.fontSizes['xl'] }}
      />
      {ArrayUtils.sort<IQuestion[]>({ array: QuestionUtils.quetions, order: 'desc', fieldToOrder: 'date' })
        .map((quest, i) => (
          <View key={i}
            style={{
              flexDirection: 'row',
              backgroundColor: THEME.colors.gray[700],
              gap: 4,
              padding: 8,
            }}
          >
            <TextBox text={quest.value1.toString()} />
            <TextBox text={quest.operator} />
            <TextBox text={quest.value2.toString()} />
            <TextBox text={'='} />
            <TextBox text={quest.answer.toString()} />
            <Text text={quest.isRight ? 'Acertou' : 'Errou'}
              style={{
                marginLeft: 4,
                fontFamily: THEME.fonts.heading,
                textAlign: 'right',
              }}
            />
            <Pressable onPress={() => onRemove(quest)}
              style={{
                flex: 1,
                alignItems: 'flex-end',
              }}>
              <X color={THEME.colors.red[800]} />
            </Pressable>
          </View>
        ))}
    </View>
  )
}

type TextBoxProps = {
  text: string
}

function TextBox ({ text }: TextBoxProps) {
  return (
    <Text text={text}
      style={{ minWidth: 15, fontFamily: THEME.fonts.heading }}
    />
  )
}