import { useState, useEffect } from 'react'
import { Alert, View, TextInput } from "react-native"

import { THEME } from "../../styles/theme"
import {
  AboutInfo,
  Button,
  IconHandPointing,
  IconPaperPlaneRight,
  Logo,
  Menu,
  MenuCallAction,
  SimpleButton,
  Text,
  TopBar
} from "../../components"
import { DateUtils, NumberUtils, QuestionUtils } from '../../../utils'
import { IOperator, IQuestion } from '../../../@types'
import { useApp } from '../../../hooks'
import { History, HistoryItem } from '../../components/history'

export function Home () {
  const {
    historyList,
    setShowHistory,
    showMenu,
    showAboutInfo,
    showHistory
  } = useApp()

  const [question, setQuestion] = useState<IQuestion>({} as IQuestion)

  const [answer, setAnswer] = useState<string>('')

  const [timer, setTimer] = useState<number>(0)
  const [started, setStarted] = useState<boolean>(false)

  useEffect(() => {
    if (!started) return
    const id = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [timer || started])


  const handleStart = () => {
    setStarted(true)
  }

  const handleStop = () => {
    setTimer(0)
    setStarted(false)
  }

  const generateQuestion = () => {
    handleStart()
    const operators = [IOperator.plus, IOperator.multiply, IOperator.division, IOperator.minus]

    setQuestion({
      ...question,
      value1: NumberUtils.random(1, 10),
      value2: NumberUtils.random(1, 10),
      operator: operators[NumberUtils.random(0, 3)]
    })
  }

  const handleInputChange = (text: string) => {
    setAnswer(text.trim())
  }

  const buildOperation = (question: IQuestion) => {
    return `${question.value1} ${question.operator} ${question.value2}${question.answer ? ' = ' + question.answer : ''}`
  }

  const handleConfirme = () => {
    if (!answer && started) {
      Alert.alert('Aviso', 'Informe o resultado')
      return
    }

    if (started) {
      handleStop()
    } else {
      generateQuestion()
      return
    }

    const rightAnswer = QuestionUtils.execCalc(question.value1, question.value2, question.operator)
    const isRight = rightAnswer === Number(answer)

    const resultMessage = `Resposta certa:\t ${buildOperation({ ...question, answer: rightAnswer })}\n` +
      `Sua resposta:\t\t\t  ${buildOperation({ ...question, answer: Number(answer) })}`

    QuestionUtils.add({
      ...question,
      isRight,
      answer: Number(answer),
      rightAnswer,
      seconds: timer,
      time: DateUtils.secondsToTime(timer),
      date: new Date()
    })

    if (isRight) {
      // Alert.alert('Acertou!', resultMessage)
    } else {
      // Alert.alert('Errou!', resultMessage)
    }
    setAnswer('')
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: THEME.colors.gray[700],
      position: 'relative'
    }}
    >
      <TopBar timer={timer} />
      {showMenu && <Menu />}
      {showAboutInfo && <AboutInfo />}
      {showHistory && <History />}
      <View
        style={{
          position: 'relative',
          flexDirection: 'row',
          paddingHorizontal: 24,
          paddingVertical: 16,
          gap: 24,
          borderBottomColor: THEME.colors.gray[200],
          borderBottomWidth: 1,
        }}
      >
        <MenuCallAction />

        <View style={{
          position: 'absolute',
          zIndex: -1,
          left: -16,
          right: -16,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12
        }}>
          <Logo size='md' />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <View style={{
          padding: 24,
        }}>
          <View
            style={{
              marginBottom: 24,
              rowGap: 4,
              alignItems: 'center'
            }}>
            <Text
              text={started ? 'Qual é o resultado?' : (historyList.length < 1 ? 'Comece o desafio' : 'Continue o desafio')}
              style={{
                color: THEME.colors.gray[200],
                fontSize: THEME.fontSizes.xl,
                fontFamily: THEME.fonts.medium,
              }}
            />
            {started && <Text
              text={buildOperation(question)}
              style={{
                color: THEME.colors.gray[200],
                fontSize: THEME.fontSizes["2xl"],
                fontFamily: THEME.fonts.medium,
              }}
            />}
          </View>

          {started && <View>
            <TextInput
              placeholder="Informe o resultado"
              value={answer}
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
              onChangeText={handleInputChange}
            />
          </View>}
          <Button
            style={{
              backgroundColor: THEME.colors.gray[500]
            }}
            onPress={handleConfirme}
          >
            <Text text={started ? 'CONFIRMAR' : (historyList.length < 1 ? 'Iniciar desafio' : 'Próxima questão')}
              style={{
                fontSize: THEME.fontSizes.lg,
                fontFamily: THEME.fonts.heading,
                color: THEME.colors.gray[800]
              }}
            />
            {
              started ? <IconPaperPlaneRight color={THEME.colors.gray[800]} /> :
                <IconHandPointing color={THEME.colors.gray[800]} weight='fill' />
            }
          </Button>
          {!started && historyList?.length > 0 && <View style={{ backgroundColor: THEME.colors.gray[200], marginTop: 16 }}>
            <HistoryItem history={historyList[historyList.length - 1]} hidenButtonDelete />
            <SimpleButton onPress={() => setShowHistory(true)}>
              <Text style={{
                padding: 4,
                color: THEME.colors.blue[800],
                fontFamily: THEME.fonts.heading,
              }} text='Ver histórico completo' />
            </SimpleButton>
          </View>}
        </View>
      </View>
    </View>
  )
}