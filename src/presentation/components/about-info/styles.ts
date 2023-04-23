import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export default StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.gray[200],
    padding: 16,
  },
  box: {
    gap: 4,
    paddingBottom: 16,
  },
  boxTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomColor: THEME.colors.gray[500],
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: THEME.fonts.heading,
    fontSize: THEME.fontSizes.lg,
  },
  description: { fontFamily: THEME.fonts.medium },
  copyright: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 16,
    paddingTop: 8,
    borderTopColor: THEME.colors.gray[500],
    borderTopWidth: 1,
  },
})
