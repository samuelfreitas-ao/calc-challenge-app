import { ReactNode } from "react"
import { StyleSheet, View } from "react-native"
import { Text } from "../text"
import { THEME } from "../../styles/theme"

type TextBoxProps = {
  icon?: ReactNode
  value: string
  isLink?: boolean
}
export function AboutTextBox ({ value, icon, isLink }: TextBoxProps) {
  const textDecorationLine = isLink ? 'underline' : 'none',
    color = isLink ? THEME.colors.blue[800] : THEME.colors.gray[800]

  return (
    <View style={styles.container}>
      {icon}
      <Text text={value} style={[styles.text, { textDecorationLine, color }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 4
  },
  text: {
    fontFamily: THEME.fonts.medium,
    fontSize: THEME.fontSizes.md,
  }
})