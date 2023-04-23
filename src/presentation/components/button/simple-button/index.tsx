import { ReactNode } from "react"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"

interface SimpleButtonProps extends TouchableOpacityProps { children: ReactNode }

export function SimpleButton ({ children, style, ...props }: SimpleButtonProps) {
  return (
    <TouchableOpacity {...props}>{children}</TouchableOpacity>
  )
}