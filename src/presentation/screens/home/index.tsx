import { useState, useEffect } from 'react'
import { Alert, View, TextInput, ScrollView, StatusBar } from "react-native"

import { THEME } from "../../styles/theme"
import {
  AboutInfo,
  Button,
  IconHandPointing,
  IconPaperPlaneRight,
  Logo,
  Menu,
  MenuCallAction,
  Text,
  TopBar
} from "../../components"
import { DateUtils, NumberUtils, QuestionUtils } from '../../../utils'
import { IOperator, IQuestion } from '../../../@types'

export function Home () {
  const [question, setQuestion] = useState<IQuestion>({} as IQuestion)

  const [answer, setAnswer] = useState<string>('')

  const [timer, setTimer] = useState<number>(0)
  const [started, setStarted] = useState<boolean>(false)
  const [isFirstQuestion, setIsFirstQuestion] = useState<boolean>(true)

  const [showMenu, setShowMenu] = useState<boolean>(false)

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
    setIsFirstQuestion(false)
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

    const rightResult = QuestionUtils.execCalc(question.value1, question.value2, question.operator)
    const isRight = rightResult === Number(answer)

    const resultMessage = `Resposta certa:\t ${buildOperation({ ...question, answer: rightResult })}\n` +
      `Sua resposta:\t\t\t  ${buildOperation({ ...question, answer: Number(answer) })}`

    QuestionUtils.add({
      ...question,
      isRight,
      answer: Number(answer),
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

  const handleShowMenu = () => {
    setShowMenu(true)
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: THEME.colors.gray[700],
      position: 'relative'
    }}
    >
      <TopBar timer={timer} />
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
        <MenuCallAction onPress={handleShowMenu} />
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

      {showMenu && <Menu onClose={setShowMenu} />}

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
              text={started ? 'Qual é o resultado?' : (isFirstQuestion ? 'Comece o desafio' : 'Continue o desafio')}
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
            <Text text={started ? 'CONFIRMAR' : (isFirstQuestion ? 'Iniciar desafio' : 'Próxima questão')}
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
        </View>
      </View>
    </View>
  )
}