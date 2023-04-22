import { useContext } from 'react'

import { AppContext } from '../presentation/contexts'

export const useApp = () => useContext(AppContext)
