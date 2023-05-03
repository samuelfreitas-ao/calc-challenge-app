import AsyncStorage from '@react-native-async-storage/async-storage'

export class LocalStorageUtils {
  static async setItem(key: string, value: string): Promise<void> {
    await AsyncStorage.setItem(key, value)
  }

  static async getItem(key: string): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem(key)
      return token
    } catch (error) {
      return null
    }
  }

  static async getAllKeys() {
    try {
      return await AsyncStorage.getAllKeys()
    } catch (error) {
      return null
    }
  }

  static async clear(): Promise<void> {
    await AsyncStorage.clear()
  }

  static async remove(key: string): Promise<void> {
    await AsyncStorage.removeItem(key)
  }
}
