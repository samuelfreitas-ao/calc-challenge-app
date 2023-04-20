import { View } from 'react-native'
import { ThumbsUp, ThumbsDown } from 'phosphor-react-native'
import { Text } from './text'
import { THEME } from '../styles/theme'

type Props = {
  points: number
  type: 'wrong' | 'right'
}
export function Points ({ points, type }: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8
      }}>
      {
        type === 'right' ?
          <ThumbsUp color={THEME.colors.green[700]} />
          :
          <ThumbsDown color={THEME.colors.red[700]} />
      }
      <Text
        text={points.toString()}
        style={{
          fontSize: THEME.fontSizes.lg,
          color: THEME.colors.red[700]
        }}
      />
    </View>
  )
}