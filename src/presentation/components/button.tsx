import { ReactNode } from "react"
import { Pressable, PressableProps } from "react-native"

interface ButtonProps extends PressableProps {
  children: ReactNode
}

export function Button ({ children, style, ...props }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          alignItems: 'center',
          gap: 8,
          padding: 16,
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'center',
          opacity: pressed ? 0.7 : 1
        }, style as any]}

      {...props}
    >
      {children}
    </Pressable>
  )
}

export function SimpleButton ({ children, style, ...props }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          alignItems: 'center',
          gap: 8,
          borderRadius: 8,
          flexDirection: 'row',
          opacity: pressed ? 0.7 : 1
        }, style as any]}

      {...props}
    >
      {children}
    </Pressable>
  )
}