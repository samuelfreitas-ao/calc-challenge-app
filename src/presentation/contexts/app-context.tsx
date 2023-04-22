import { createContext, ReactNode, useState } from 'react'
import { AboutInfo, History, Menu } from '../components'

type AppContextType = {
  showMenu: boolean
  setShowMenu: (showMenu: boolean) => void
  showAboutInfo: boolean
  setShowAboutInfo: (showAboutInfo: boolean) => void
  showHistory: boolean
  setShowHistory: (showHistory: boolean) => void
}

export const AppContext = createContext({} as AppContextType)

type AppProviderType = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderType) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showAboutInfo, setShowAboutInfo] = useState<boolean>(false)
  const [showHistory, setShowHistory] = useState<boolean>(false)



  return (
    <AppContext.Provider value={{
      setShowAboutInfo,
      showAboutInfo,
      setShowMenu,
      showMenu,
      setShowHistory,
      showHistory,
    }}>
      {showMenu && <Menu onClose={setShowMenu} />}
      {showAboutInfo && <AboutInfo />}
      {showHistory && <History />}

      {children}
    </AppContext.Provider>
  )
}
