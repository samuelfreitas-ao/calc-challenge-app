import { View, FlatList } from 'react-native'

import Styles from './styles'

import { THEME } from '../../styles/theme'
import { QuestionUtils } from '../../../utils'

import {
  Text,
  Modal,
  SimpleButton
} from '../'

import { useApp } from '../../../hooks'
import { HistoryItem } from './history-item'

export function History () {
  const { setShowHistory, historyList } = useApp()

  return (
    <Modal onClose={setShowHistory}>
      <View style={Styles.container}>
        <View
          style={Styles.boxTitle}>
          <Text text={`Histórico (${QuestionUtils.quetions.length})`}
            style={Styles.title}
          />
          <SimpleButton onPress={() => setShowHistory(false)}>
            <Text text='Fechar' style={Styles.textButton} />
          </SimpleButton>
        </View>
        <FlatList
          data={historyList.sort((a, b) => {
            const x = a.date.getTime(), y = b.date.getTime()
            return x > y ? -1 : (x < y ? 1 : 0)
          })}
          keyExtractor={item => item.date.getTime().toString()}
          renderItem={({ item, index }) => (
            <HistoryItem history={item} index={index + 1} />
          )}
          ListEmptyComponent={() => (
            <View>
              <Text text='Nenhum registo de momento. Inicie o desafio.'
                style={{
                  fontFamily: THEME.fonts.medium,
                  fontSize: THEME.fontSizes.md
                }}
              />
            </View>
          )}
        />
      </View>
    </Modal >
  )
}

