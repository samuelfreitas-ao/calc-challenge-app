import { StyleSheet, View } from "react-native"
import { Menu, MenuCallAction } from ".."
import { useApp } from "../../../hooks"
import { THEME } from "../../styles/theme"
import { Logo } from "../logo"

export function MenuBar () {
  const { showMenu } = useApp()
  return (
    <>
      {showMenu && <Menu />}
      <View style={styles.container}>
        <MenuCallAction />
        <View style={styles.logoBox}>
          <Logo size='md' />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 24,
    borderBottomColor: THEME.colors.gray[200],
    borderBottomWidth: 1,
  },
  logoBox: {
    position: 'absolute',
    zIndex: -1,
    left: -16,
    right: -16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12
  }
})