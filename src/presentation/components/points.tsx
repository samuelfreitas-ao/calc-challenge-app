import { StyleSheet, View } from 'react-native'
import { Text } from './text'
import { THEME } from '../styles/theme'
import { IconThumbsDown, IconThumbsUp } from './icon'

type Props = {
  points: number
  type: 'wrong' | 'correct'
}
export function Points ({ points, type }: Props) {
  const green = THEME.colors.green[700],
    red = THEME.colors.red[700]
  const color = type === 'correct' ? green : red
  const icon = type === 'correct' ? <IconThumbsUp color={green} weight='fill' /> : <IconThumbsDown color={red} weight='fill' />
  return (
    <View style={styles.container}>
      {icon}
      <View style={styles.textBox}>
        <Text text={points.toString()} style={[styles.text, { color }]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8
  },
  textBox: {
    borderColor: THEME.colors.gray[800],
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8
  },
  text: {
    fontSize: THEME.fontSizes.md,
    fontFamily: THEME.fonts.heading
  }
})