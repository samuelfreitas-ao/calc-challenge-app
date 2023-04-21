import { Linking } from 'react-native'

export class OpenLinkUtils {
  static async open(url: string): Promise<boolean> {
    const supported = await Linking.canOpenURL(url)
    if (supported) {
      await Linking.openURL(url)
      return true
    } else {
      return false
    }
  }
}
