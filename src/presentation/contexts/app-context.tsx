import { createContext, ReactNode, useEffect, useState } from 'react'
import { IQuestion } from '../../@types'
import { QuestionUtils } from '../../utils'

type AppContextType = {
  showMenu: boolean
  setShowMenu: (showMenu: boolean) => void
  showAboutInfo: boolean
  setShowAboutInfo: (showAboutInfo: boolean) => void
  showHistory: boolean
  setShowHistory: (showHistory: boolean) => void,
  historyList: IQuestion[]
  setHistoryList: (historyList: IQuestion[]) => void
}

export const AppContext = createContext({} as AppContextType)

type AppProviderType = {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderType) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showAboutInfo, setShowAboutInfo] = useState<boolean>(false)
  const [showHistory, setShowHistory] = useState<boolean>(false)

  const [historyList, setHistoryList] = useState<IQuestion[]>([])

  useEffect(() => {
    console.log('Loaded');

    (async () => {
      const list = await QuestionUtils.getAll()
      setHistoryList(list)
    })()
  }, [])

  return (
    <AppContext.Provider value={{
      setShowAboutInfo,
      showAboutInfo,
      setShowMenu,
      showMenu,
      setShowHistory,
      showHistory,
      historyList,
      setHistoryList
    }}>
      {children}
    </AppContext.Provider>
  )
}
