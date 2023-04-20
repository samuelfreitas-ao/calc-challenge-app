import { View, Pressable } from 'react-native'
import { X } from "phosphor-react-native"

import { Text } from "./text"
import { THEME } from '../styles/theme'
import { QuestionUtils } from '../../utils'
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
      {QuestionUtils.quetions.sort((a, b) => {
        const x = a.date.getTime(),
          y = b.date.getTime()
        if (x > y) {
          return -1
        }
        if (x < y) {
          return 1
        }
        return 0
      }).map((quest, i) => (
        <View key={i}
          style={{
            flexDirection: 'row',
            backgroundColor: THEME.colors.gray[700],
            gap: 4,
            padding: 8,
          }}
        >
          <Text text={quest.value1.toString()}
            style={{ minWidth: 15, fontFamily: THEME.fonts.heading }}
          />
          <Text text={quest.operator}
            style={{ minWidth: 15, fontFamily: THEME.fonts.heading }}
          />
          <Text text={quest.value2.toString()}
            style={{ minWidth: 15, fontFamily: THEME.fonts.heading }}
          />
          <Text text={'='}
            style={{ minWidth: 15, fontFamily: THEME.fonts.heading }}
          />
          <Text text={quest.answer.toString()}
            style={{ minWidth: 15, fontFamily: THEME.fonts.heading }}
          />
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