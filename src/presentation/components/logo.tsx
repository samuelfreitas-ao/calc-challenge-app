import { Image } from "react-native"

export function Logo () {
  return (
    <Image source={require('../../../assets/logo.jpg')}
      style={{
        width: 190,
        height: 54,
      }}
    />
  )
}