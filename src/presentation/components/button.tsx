import { ReactNode } from "react"
import { Pressable, PressableProps, TouchableOpacity, TouchableOpacityProps } from "react-native"

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

interface SimpleButtonProps extends TouchableOpacityProps {
  children: ReactNode
}
export function SimpleButton ({ children, style, ...props }: SimpleButtonProps) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        gap: 8,
        borderRadius: 8,
        flexDirection: 'row',
      }}
      {...props}
    >
      {children}
    </TouchableOpacity>
  )
}