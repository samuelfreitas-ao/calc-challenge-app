import { View, Alert, TouchableOpacity } from "react-native"
import { ReactNode } from "react"
import * as MailComposer from 'expo-mail-composer'

import Styles from './styles'

import { Text } from "../text"
import { THEME } from "../../styles/theme"

import { OpenLinkUtils } from "../../../utils/open-link-util"
import { AbouData } from "../../../data"
import { useApp } from "../../../hooks"
import { Modal } from "../modal"
import {
  IconCopyright,
  IconEmail,
  IconFacebook,
  IconGithub,
  IconInfo,
  IconLinkedIn,
  IconTwitter,
  IconUser,
  IconWhatsapp
} from "../icon"
import { SimpleButton } from "../button"
import styles from "./styles"

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
      <View style={Styles.container}>
        <View style={styles.box}>
          <View style={Styles.boxTitle}>
            <IconInfo weight="fill" />
            <Text
              text={`Sobre a ${app.name}`}
              style={Styles.title}
            />
          </View>
          <Text
            text={app.description}
            style={Styles.description}
          />
          <Text
            text={`Versão ${app.version}`}
            style={Styles.description}
          />
          <View style={styles.copyright}>
            <Text
              text={'copyright'}
              style={Styles.description}
            />
            <IconCopyright size={THEME.fontSizes.md} />
            <Text
              text={developer.name}
              style={Styles.description}
            />
            <Text
              text={String(copyRightYear)}
              style={Styles.description}
            />
          </View>
        </View>

        <View style={styles.box}>
          <View style={Styles.boxTitle}>
            <Text
              text="Desenvolvedor"
              style={Styles.title}
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
        </View>
        <View style={styles.socialLinks}>
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
  icon?: ReactNode
  value: string
  isLink?: boolean
}
function TextBox ({ value, icon, isLink }: TextBoxProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        columnGap: 4
      }}
    >
      {icon}
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