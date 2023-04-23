
import { useRef } from "react"
import {
  GestureResponderEvent,
  View,
  Pressable,
  Alert,
} from "react-native"

import { THEME } from "../../styles/theme"
import { IconCalculator, IconHistory, IconInfo } from "../icon"
import { Logo } from "../logo"
import { useApp } from "../../../hooks"
import { MenuItem } from './menu-item'
import styles from './styles'

export function Menu () {
  const { setShowAboutInfo, setShowHistory, setShowMenu } = useApp()
  const menuRef = useRef()

  const autoClose = (event: GestureResponderEvent) => {
    if (event.target == menuRef.current) handleClose()
  }

  const handleClose = () => {
    setShowMenu(false)
  }

  const handleShowAboutInfo = () => {
    handleClose()
    setShowAboutInfo(true)
  }

  const handleShowHistory = () => {
    handleClose()
    setShowHistory(true)
  }

  const handleShowMultiplicationTable = () => {
    Alert.alert('Tabuada', 'Essa funcionalidade está em desenvolvimento.\n\nPoderá ter acesso a uma lista de tabuada para melhorar a sua capacidade em resolver problemas matemáticos.')
  }

  return (
    <Pressable style={styles.container} onPress={autoClose} ref={menuRef}>
      <View style={styles.nav}>
        <View style={styles.logoBox}>
          <Logo />
        </View>
        <MenuItem
          text="Histórico"
          icon={<IconHistory color={THEME.colors.gray[200]} />}
          onPress={handleShowHistory}
        />
        <MenuItem
          text="Tabuada"
          icon={<IconCalculator color={THEME.colors.gray[200]} />}
          onPress={handleShowMultiplicationTable}
        />
        <MenuItem
          text="Sobre"
          icon={<IconInfo color={THEME.colors.gray[200]} />}
          onPress={handleShowAboutInfo}
        />
      </View>
    </Pressable>
  )
}
