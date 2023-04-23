export * from './simple-button'

import { ReactNode } from "react"
import {
  Pressable,
  PressableProps,
  StyleSheet,
} from "react-native"

interface ButtonProps extends PressableProps {
  children: ReactNode
}

export function Button ({ children, style, ...props }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [Styles.constainer, { opacity: pressed ? 0.7 : 1 }, style as any]}
      {...props}
    >
      {children}
    </Pressable>
  )
}

const Styles = StyleSheet.create({
  constainer: {
    alignItems: 'center',
    gap: 8,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})