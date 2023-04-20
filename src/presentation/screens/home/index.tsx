import { View, TextInput, ScrollView } from "react-native"

import { THEME } from "../../styles/theme"
import { Button, Logo, Points, Text } from "../../components"

export function Home () {
  return (
    <View style={{
      flex: 1,
      backgroundColor: THEME.colors.gray[700]
    }}
    >
      <View style={{
        padding: 24,
        backgroundColor: THEME.colors.gray[200],
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Points points={4} type="wrong" />
        <Points points={2000} type="right" />
      </View>

      <View
        style={{
          rowGap: 24,
        }}
      >
        <ScrollView>
          <View style={{
            alignItems: 'center',
            paddingVertical: 16
          }}>
            <Logo />
          </View>

          <View style={{
            justifyContent: 'center',
            flexDirection: 'column',
            padding: 24,
          }}>
            <View
              style={{
                marginBottom: 24,
                rowGap: 4,
                alignItems: 'center'
              }}>
              <Text
                text="Qual é o resultado?"
                style={{
                  color: THEME.colors.gray[200],
                  fontSize: THEME.fontSizes.xl,
                  fontFamily: THEME.fonts.medium,
                }}
              />
              <Text
                text="4 + 4"
                style={{
                  color: THEME.colors.gray[200],
                  fontSize: THEME.fontSizes["2xl"],
                  fontFamily: THEME.fonts.medium,
                }}
              />
            </View>

            <View>
              <TextInput
                placeholder="Informe o resultado"
                style={{
                  backgroundColor: THEME.colors.gray[800],
                  color: THEME.colors.gray[200],
                  padding: 16,
                  fontSize: THEME.fontSizes.lg,
                  marginBottom: 24,
                  borderRadius: 8
                }}
                placeholderTextColor={THEME.colors.gray[600]}
                keyboardType="numeric"
              />
            </View>
            <Button
              style={{
                backgroundColor: THEME.colors.gray[500]
              }}
            >
              <Text text="CONFIRMAR"
                style={{
                  fontSize: THEME.fontSizes.lg,
                  fontFamily: THEME.fonts.heading,
                  color: THEME.colors.gray[800]
                }}
              />
            </Button>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}