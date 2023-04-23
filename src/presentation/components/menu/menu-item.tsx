import { ReactNode } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"

import { THEME } from "../../styles/theme"
import { Text } from "../text"

type MenuItemProps = {
  text: string
  icon?: ReactNode
  onPress?: () => void
}

export function MenuItem ({ text, icon, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      {icon && icon}
      <Text text={text} style={styles.text} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderBottomColor: THEME.colors.gray[800],
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  text: {
    fontFamily: THEME.fonts.medium,
    fontSize: THEME.fontSizes.lg,
    color: THEME.colors.gray[200]
  }
})