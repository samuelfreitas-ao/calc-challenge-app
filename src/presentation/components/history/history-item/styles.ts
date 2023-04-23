import { StyleSheet } from 'react-native'
import { THEME } from '../../../styles/theme'

export default StyleSheet.create({
  container: {
    borderBottomColor: THEME.colors.gray[500],
    borderBottomWidth: 1,
    padding: 8,
  },
  operationBox: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 4,
    alignItems: 'center',
  },
  rightAnswer: {
    marginLeft: 4,
    fontFamily: THEME.fonts.heading,
    textAlign: 'right',
  },
  deleteButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  textBox: {
    minWidth: 15,
    fontSize: THEME.fontSizes.md,
    fontFamily: THEME.fonts.heading,
  },
})
