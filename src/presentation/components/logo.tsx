import { Image } from "react-native"

export function Logo () {
  return (
    <Image source={require('../../../assets/logo.png')}
      style={{
        width: 190,
        height: 54,
      }}
    />
  )
}