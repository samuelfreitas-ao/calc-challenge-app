import { View } from 'react-native'
import { THEME } from '../styles/theme'
import { DateUtils, QuestionUtils } from '../../utils'
import { Points } from './points'
import { Text } from './text'

type Props = {
  timer: number
}

export function TopBar ({ timer }: Props) {
  return (
    <View style={{
      padding: 24,
      backgroundColor: THEME.colors.gray[200],
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Points
        points={QuestionUtils.quetions.filter(quest => !quest.isRight).length}
        type="wrong"
      />
      <Text text={DateUtils.secondsToTime(timer)}
        style={{
          fontFamily: THEME.fonts.medium,
          fontSize: THEME.fontSizes.md
        }}
      />
      <Points
        points={QuestionUtils.quetions.filter(quest => quest.isRight).length}
        type="right"
      />
    </View>
  )
}