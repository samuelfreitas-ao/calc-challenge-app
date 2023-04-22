import { Pressable } from "react-native"
import { View } from "react-native"
import { IconQuestion } from "./icon"
import { THEME } from "../styles/theme"
import { SimpleButton } from "./button"

type Props = {
  onPress: () => void
}
export function AboutCallAction ({ onPress }: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}>
      <SimpleButton
        style={{
          marginHorizontal: 24,
          marginTop: 24,
          borderRadius: 100
        }}
        onPress={onPress}>
        <IconQuestion
          color={THEME.colors.gray[200]}
          weight='fill'
          size={46}
        />
      </SimpleButton>
    </View>
  )
}