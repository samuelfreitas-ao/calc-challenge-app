import { StyleSheet, TextProps } from "react-native"
import { Text as TextReact } from "react-native"
import { ReactNode } from "react"

import { THEME } from "../styles/theme"

interface TextProp extends TextProps {
  text?: string
  children?: ReactNode
}

export function Text ({ text, children, style, ...props }: TextProp) {
  return (
    <TextReact style={[styles.container, style]} {...props}>
      {text ?? children}
    </TextReact>
  )
}

const styles = StyleSheet.create({
  container: { fontFamily: THEME.fonts.body, color: THEME.colors.gray[800] }
})