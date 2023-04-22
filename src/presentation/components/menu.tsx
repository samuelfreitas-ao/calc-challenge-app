import { ReactNode, useRef } from "react"
import { GestureResponderEvent, View, TouchableOpacity, Pressable, StatusBar } from "react-native"
import { THEME } from "../styles/theme"
import { Text } from "./text"
import { IconHistory, IconInfo, IconList } from "./icon"
import { Logo } from "./logo"
import { SimpleButton } from "./button"

type MenuProps = {
  show?: boolean
  onClose: (open: boolean) => void
}

export function Menu ({ show, onClose }: MenuProps) {
  const menuRef = useRef()

  const autoClose = (event: GestureResponderEvent) => {
    if (event.target == menuRef.current) handleClose()
  }

  const handleClose = () => {
    onClose(false)
  }

  return (
    <Pressable
      style={{
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: '100%',
        top: 0,
        bottom: 0,
        zIndex: 1000,
        justifyContent: 'center',
        padding: -16,
      }}
      onPress={autoClose}
      ref={menuRef}
    >
      <View
        style={{
          // backgroundColor: THEME.colors.white,
          backgroundColor: THEME.colors.gray[700],
          width: 200,
          height: '100%',
          paddingTop: StatusBar.currentHeight + 24
        }}
      >
        <View style={{
          paddingHorizontal: 4,
          marginBottom: 16,
          paddingBottom: 28,
          borderBottomColor: THEME.colors.gray[600],
          borderBottomWidth: 1
        }}>
          <Logo />
        </View>
        <MenuItem
          text="Histórico"
          icon={<IconHistory color={THEME.colors.gray[200]} />}
          onPress={handleClose}
        />
        <MenuItem
          text="Sobre"
          icon={<IconInfo color={THEME.colors.gray[200]} />}
          onPress={handleClose}
        />
      </View>
    </Pressable>
  )
}

type MenuItemProps = {
  text: string
  icon?: ReactNode
  border?: boolean
  onPress?: () => void
}

function MenuItem ({ text, icon, border, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity
      style={{
        padding: 8,
        borderBottomColor: THEME.colors.gray[800],
        borderBottomWidth: border ? 1 : 0,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8
      }}
      onPress={onPress}>
      {icon && icon}
      <Text
        text={text}
        style={{
          fontFamily: THEME.fonts.medium,
          fontSize: THEME.fontSizes.lg,
          color: THEME.colors.gray[200]
        }}
      />
    </TouchableOpacity>
  )
}

type Props = {
  onPress: () => void
}
export function MenuCallAction ({ onPress }: Props) {
  return (
    <View
      style={{
      }}>
      <SimpleButton
        onPress={onPress}>
        <IconList
          color={THEME.colors.gray[200]}
          weight='fill'
          size={32}
        />
      </SimpleButton>
    </View>
  )
}