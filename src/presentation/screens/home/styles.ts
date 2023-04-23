import { StatusBar, StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.gray[700],
    position: 'relative',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  titleBox: {
    marginBottom: 24,
    rowGap: 4,
    alignItems: 'center',
  },
  question: {
    color: THEME.colors.gray[200],
    fontSize: THEME.fontSizes.xl,
    fontFamily: THEME.fonts.medium,
  },
  operation: {
    color: THEME.colors.gray[200],
    fontSize: THEME.fontSizes['2xl'],
    fontFamily: THEME.fonts.medium,
  },
  input: {
    backgroundColor: THEME.colors.gray[800],
    color: THEME.colors.gray[200],
    padding: 16,
    fontSize: THEME.fontSizes.lg,
    marginBottom: 24,
    borderRadius: 8,
  },
  button: {
    backgroundColor: THEME.colors.gray[500],
  },
  textButton: {
    fontSize: THEME.fontSizes.lg,
    fontFamily: THEME.fonts.heading,
    color: THEME.colors.gray[800],
  },
  historyResumeBox: { backgroundColor: THEME.colors.gray[200], marginTop: 16 },
  viewHistoryText: {
    padding: 4,
    color: THEME.colors.blue[800],
    fontFamily: THEME.fonts.heading,
  },
})
