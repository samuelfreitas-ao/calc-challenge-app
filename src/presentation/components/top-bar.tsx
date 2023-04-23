import { View, StatusBar, StyleSheet } from 'react-native'
import { THEME } from '../styles/theme'
import { DateUtils } from '../../utils'
import { Points } from './points'
import { Text } from './text'
import { useApp } from '../../hooks'

type Props = { timer: number }

export function TopBar ({ timer }: Props) {
  const { historyList } = useApp()
  const wrongPoints = historyList.filter(quest => !quest.isRight).length
  const rightPoints = historyList.filter(quest => quest.isRight).length

  return (
    <View style={styles.container}>
      <Points points={wrongPoints} type="wrong" />
      <Text text={DateUtils.secondsToTime(timer)} style={styles.timer} />
      <Points points={rightPoints} type="right" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24 + StatusBar.currentHeight || 0,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: THEME.colors.gray[200],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  timer: {
    fontFamily: THEME.fonts.heading,
    fontSize: THEME.fontSizes.md
  }
})