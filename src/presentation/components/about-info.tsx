import { GestureResponderEvent, View, Alert, TouchableOpacity, Pressable } from "react-native"
import { ReactNode, useRef } from "react"

import * as MailComposer from 'expo-mail-composer'

import { Text } from "./text"
import { THEME } from "../styles/theme"
import {
  IconEmail,
  IconFacebook,
  IconGithub,
  IconInfo,
  IconUser,
  IconWhatsapp,
  IconCopyright,
  IconLinkedIn,
  IconTwitter,
  SimpleButton,
  Modal
} from "./"
import { OpenLinkUtils } from "../../utils/open-link-util"
import { AbouData } from "../../data"
import { useApp } from "../../hooks"

export function AboutInfo () {
  const { setShowAboutInfo } = useApp()
  const { app, developer, links, message } = AbouData()

  const initalYear = 2023
  const currentYear = new Date().getUTCFullYear()
  const copyRightYear = initalYear < currentYear ? `${initalYear} - ${currentYear}` : initalYear

  const handleOpenLink = async (url: string) => {
    const opened = await OpenLinkUtils.open(url)
    if (!opened) {
      Alert.alert('Erro', 'Não foi possível abrir link.')
    }
  }

  const handleMail = () => {
    MailComposer.composeAsync({
      subject: 'Desenvolvimento de software/negócio',
      recipients: [developer.email],
      body: message,
      isHtml: true
    })
  }

  return (
    <Modal onClose={setShowAboutInfo}>
      <View
        style={{
          backgroundColor: THEME.colors.gray[100],
          padding: 8
        }}
      >
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
              marginBottom: 8,
              paddingBottom: 8,
              borderBottomColor: THEME.colors.gray[200],
              borderBottomWidth: 1,
            }}
          >
            <IconInfo weight="fill" />
            <Text
              text={app.name}
              style={{
                fontFamily: THEME.fonts.heading,
                fontSize: THEME.fontSizes.lg,
              }}
            />
          </View>
          <Text
            text={app.description}
            style={{
              fontFamily: THEME.fonts.medium,
              marginBottom: 4
            }}
          />
          <Text
            text={`Versão ${app.version}`}
            style={{
              fontFamily: THEME.fonts.medium,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Text
              text={'copyright'}
              style={{
                fontFamily: THEME.fonts.medium,
              }}
            />
            <IconCopyright size={THEME.fontSizes.md} />
            <Text
              text={developer.name}
              style={{
                fontFamily: THEME.fonts.medium,
              }}
            />
            <Text
              text={String(copyRightYear)}
              style={{
                fontFamily: THEME.fonts.medium,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
            marginTop: 16,
            marginBottom: 8,
            paddingBottom: 8,
            borderBottomColor: THEME.colors.gray[200],
            borderBottomWidth: 1,
          }}
        >
          <Text
            text="Desenvolvedor"
            style={{
              fontFamily: THEME.fonts.heading,
              fontSize: THEME.fontSizes.lg,
            }}
          />
        </View>
        <View
          style={{
            rowGap: 4
          }}>
          <TextBox
            icon={<IconUser color={THEME.colors.gray[800]} weight="fill" />}
            value={developer.name}
          />
          <TouchableOpacity
            onPress={handleMail}>
            <TextBox
              icon={<IconEmail color={THEME.colors.gray[800]} />}
              value={developer.email}
              isLink={true}
            />
          </TouchableOpacity>
          <SimpleButton
            onPress={async () => handleOpenLink(links.github)}>
            <TextBox
              icon={<IconGithub color={THEME.colors.gray[800]} weight="fill" />}
              value={links.github.substring(8)}
              isLink={true}
            />
          </SimpleButton>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            columnGap: 16,
            paddingTop: 8,
            marginTop: 16,
            borderTopColor: THEME.colors.gray[200],
            borderTopWidth: 1,
          }}>
          <SimpleButton onPress={async () => handleOpenLink(links.whatsapp)}>
            <IconWhatsapp color={THEME.colors.gray[800]} weight="fill"
              size={THEME.fontSizes["2xl"]} />
          </SimpleButton>
          <SimpleButton onPress={async () => handleOpenLink(links.linkedin)}>
            <IconLinkedIn color={THEME.colors.gray[800]} weight="fill"
              size={THEME.fontSizes["2xl"]} />
          </SimpleButton>
          <SimpleButton onPress={async () => handleOpenLink(links.facebook)}>
            <IconFacebook color={THEME.colors.gray[800]} weight="fill"
              size={THEME.fontSizes["2xl"]} />
          </SimpleButton>
          <SimpleButton onPress={async () => handleOpenLink(links.twitter)}>
            <IconTwitter color={THEME.colors.gray[800]} weight="fill"
              size={THEME.fontSizes["2xl"]} />
          </SimpleButton>
        </View>
      </View>
    </Modal>
  )
}

type TextBoxProps = {
  label?: ReactNode
  icon?: ReactNode
  value: string
  isLink?: boolean
}
function TextBox ({ label, value, icon, isLink }: TextBoxProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        columnGap: 4
      }}
    >
      {icon ? icon : <Text
        style={{
          fontFamily: THEME.fonts.heading,
          textTransform: 'uppercase',
          fontSize: THEME.fontSizes.md
        }}
      >{label}</Text>}
      <Text
        style={{
          fontFamily: THEME.fonts.medium,
          fontSize: THEME.fontSizes.md,
          textDecorationLine: isLink ? 'underline' : 'none',
          color: isLink ? THEME.colors.blue[800] : THEME.colors.gray[800],
        }}
      >{value}</Text>
    </View>
  )
}