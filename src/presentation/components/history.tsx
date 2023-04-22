import { View, Pressable, FlatList } from 'react-native'

import { THEME } from '../styles/theme'
import { QuestionUtils } from '../../utils'
import { IQuestion } from '../../@types'

import { Text, IconX, Modal } from '.'

import { useApp } from '../../hooks'

export function History () {
  const { setShowHistory, setHistoryList } = useApp()

  const onRemove = (quest: IQuestion) => {
    QuestionUtils.quetions = [...QuestionUtils.quetions].
      filter(questItem => questItem.date != quest.date)
    setHistoryList(QuestionUtils.quetions)
  }
  return (
    <Modal onClose={setShowHistory}>
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
        <FlatList
          data={QuestionUtils.quetions}
          keyExtractor={item => item.date.getTime().toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: THEME.colors.gray[700],
                gap: 4,
                padding: 8,
              }}
            >
              <TextBox text={item.value1.toString()} />
              <TextBox text={item.operator} />
              <TextBox text={item.value2.toString()} />
              <TextBox text={'='} />
              <TextBox text={item.answer.toString()} />
              <Text text={item.isRight ? 'Acertou' : 'Errou'}
                style={{
                  marginLeft: 4,
                  fontFamily: THEME.fonts.heading,
                  textAlign: 'right',
                }}
              />
              <Pressable onPress={() => onRemove(item)}
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                }}>
                <IconX color={THEME.colors.red[800]} />
              </Pressable>
            </View>
          )}
        />
        {/* {QuestionUtils.quetions.sort((a, b) => {
          const x = a.date.getTime(), y = b.date.getTime()
          //Order desc
          return x > y ? -1 : (x < y ? 1 : 0)
        }).map((quest, i) => (
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
              <IconX color={THEME.colors.red[800]} />
            </Pressable>
          </View>
        ))} */}
      </View>
    </Modal>
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