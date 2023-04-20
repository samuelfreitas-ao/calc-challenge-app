import { View } from "react-native"
import { THEME } from "../../styles/theme"
import { Text } from "../../components"

export function Home () {
  return (
    <View style={{
      flex: 1,
      backgroundColor: THEME.colors.gray[700]
    }}
    >
      <Text
        text="Qual é o resultado?"
        style={{
          color: THEME.colors.gray[200],
          fontSize: THEME.fontSizes.xl,
          fontFamily: THEME.fonts.medium,
        }}
      />
      <Text
        text="4 + 4"
        style={{
          color: THEME.colors.gray[200],
          fontSize: THEME.fontSizes["2xl"],
          fontFamily: THEME.fonts.medium,
        }}
      />
    </View>
  )
}