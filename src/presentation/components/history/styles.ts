import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    rowGap: 4,
    marginTop: 8,
    backgroundColor: THEME.colors.gray[200],
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  boxTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    minWidth: 15,
    fontFamily: THEME.fonts.heading,
    fontSize: THEME.fontSizes['xl'],
  },
  textButton: {
    fontFamily: THEME.fonts.heading,
    backgroundColor: THEME.colors.gray[500],
    padding: 8,
  },
})
