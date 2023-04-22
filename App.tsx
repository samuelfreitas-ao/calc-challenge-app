import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Exo_400Regular, Exo_500Medium, Exo_700Bold, useFonts } from '@expo-google-fonts/exo'

import { Home } from './src/presentation/screens'

export default function App () {
  const [fontsLoaded] = useFonts({ Exo_400Regular, Exo_500Medium, Exo_700Bold })

  if (!fontsLoaded) return <></>

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </SafeAreaProvider>
  )
}
