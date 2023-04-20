import { View } from "react-native"

import { THEME } from "../../styles/theme"
import { Points, Text } from "../../components"

export function Home () {
  return (
    <View style={{
      flex: 1,
      backgroundColor: THEME.colors.gray[700]
    }}
    >
      <View style={{
        padding: 24,
        backgroundColor: THEME.colors.gray[200],
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Points points={2000} type="right" />
        <Points points={4} type="wrong" />
      </View>

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