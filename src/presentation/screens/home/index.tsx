import { useState, useEffect } from 'react'
import { Alert, View, TextInput } from "react-native"

import Styles from './styles'
import { THEME } from "../../styles/theme"
import {
  AboutInfo,
  Button,
  IconHandPointing,
  IconPaperPlaneRight,
  SimpleButton,
  Text,
  TopBar
} from "../../components"
import { History, HistoryItem } from '../../components/history'
import { DateUtils, QuestionUtils } from '../../../utils'
import { IQuestion } from '../../../@types'
import { useApp } from '../../../hooks'
import { MenuBar } from '../../components/menu/menu-bar'

export function Home () {
  const { historyList, setShowHistory, showAboutInfo, showHistory } = useApp()
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

  const handleStart = () => { setStarted(true) }

  const handleStop = () => {
    setTimer(0)
    setStarted(false)
  }

  const generateQuestion = () => {
    handleStart()
    setQuestion({ ...question, ...QuestionUtils.generateQuestion() })
  }

  const handleInputChange = (text: string) => { setAnswer(text.trim()) }

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
    const correctAnswer = QuestionUtils.execCalc(question.value1, question.value2, question.operator)
    const isCorrect = correctAnswer === Number(answer)

    QuestionUtils.add({
      ...question,
      isCorrect,
      answer: Number(answer),
      correctAnswer,
      seconds: timer,
      time: DateUtils.secondsToTime(timer),
      date: new Date()
    })
    setAnswer('')
  }

  return (
    <View style={Styles.container}>
      {showAboutInfo && <AboutInfo />}
      {showHistory && <History />}

      <TopBar timer={timer} />
      <MenuBar />

      <View style={Styles.body}>
        <View style={Styles.titleBox}>
          <Text
            text={started ? 'Qual é o resultado?' : (historyList.length < 1 ? 'Comece o desafio' : 'Continue o desafio')}
            style={Styles.question}
          />
          {started &&
            <Text
              text={buildOperation(question)}
              style={Styles.operation}
            />}
        </View>

        {started && <View>
          <TextInput
            placeholder="Informe o resultado"
            value={answer}
            style={Styles.input}
            placeholderTextColor={THEME.colors.gray[600]}
            keyboardType="numeric"
            onChangeText={handleInputChange}
          />
        </View>}
        <Button style={Styles.button} onPress={handleConfirme}>
          <Text
            text={started ? 'CONFIRMAR' : (historyList.length < 1 ? 'Iniciar desafio' : 'Próxima questão')}
            style={Styles.textButton}
          />
          {
            started ? <IconPaperPlaneRight color={THEME.colors.gray[800]} /> :
              <IconHandPointing color={THEME.colors.gray[800]} weight='fill' />
          }
        </Button>
        {!started && historyList?.length > 0 &&
          <View style={Styles.historyResumeBox}>
            <HistoryItem history={historyList[historyList.length - 1]} hidenButtonDelete />
            <SimpleButton onPress={() => setShowHistory(true)}>
              <Text style={Styles.viewHistoryText} text='Ver histórico completo' />
            </SimpleButton>
          </View>}
      </View>
    </View>
  )
}