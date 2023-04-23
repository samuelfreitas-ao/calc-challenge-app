import { View } from "react-native"
import { SimpleButton } from "../button"
import { useApp } from "../../../hooks"
import { IconList } from "../icon"
import { THEME } from "../../styles/theme"

export function MenuCallAction () {
  const { setShowMenu } = useApp()
  return (
    <View>
      <SimpleButton
        onPress={() => setShowMenu(true)}>
        <IconList
          color={THEME.colors.gray[200]}
          weight='fill'
          size={32}
        />
      </SimpleButton>
    </View>
  )
}