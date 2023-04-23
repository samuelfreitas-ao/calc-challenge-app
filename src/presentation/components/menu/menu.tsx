
import { useRef } from "react"
import {
  GestureResponderEvent,
  View,
  Pressable,
} from "react-native"

import { THEME } from "../../styles/theme"
import { IconHistory, IconInfo } from "../icon"
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
          text="Sobre"
          icon={<IconInfo color={THEME.colors.gray[200]} />}
          onPress={handleShowAboutInfo}
        />
      </View>
    </Pressable>
  )
}
