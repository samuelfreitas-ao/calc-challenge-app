import { Image } from "react-native"

type Props = {
  size?: 'sm' | 'md' | 'lg'
}

export function Logo ({ size = 'md' }: Props) {
  const width = size == 'sm' ? 95 : (size == 'md' ? 190 : 300)
  const height = size == 'sm' ? 42 : (size == 'md' ? 54 : 132)
  return (
    <Image source={require('../../../assets/logo.png')}
      style={{ width, height }}
    />
  )
}