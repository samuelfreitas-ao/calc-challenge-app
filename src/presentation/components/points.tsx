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
          <ThumbsUp
            color={THEME.colors.green[700]}
            weight='fill'
          />
          :
          <ThumbsDown
            color={THEME.colors.red[700]}
            weight='fill'
          />
      }
      <View
        style={{
          borderColor: THEME.colors.gray[800],
          borderWidth: 1,
          paddingHorizontal: 16,
          paddingVertical: 4,
          borderRadius: 8
        }}>
        <Text
          text={points.toString()}
          style={{
            fontSize: THEME.fontSizes.md,
            color: type === 'right' ? THEME.colors.green[700] : THEME.colors.red[700],
            fontFamily: THEME.fonts.heading
          }}
        />
      </View>
    </View>
  )
}