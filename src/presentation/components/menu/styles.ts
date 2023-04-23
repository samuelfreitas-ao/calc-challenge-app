import { StatusBar, StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '100%',
    top: 0,
    bottom: 0,
    zIndex: 1000,
    flexDirection: 'row',
  },
  nav: {
    backgroundColor: THEME.colors.gray[700],
    height: '100%',
    paddingTop: StatusBar.currentHeight + 24,
  },
  logoBox: {
    paddingHorizontal: 16,
    marginBottom: 16,
    paddingBottom: 28,
    borderBottomColor: THEME.colors.gray[600],
    borderBottomWidth: 1,
  },
})
