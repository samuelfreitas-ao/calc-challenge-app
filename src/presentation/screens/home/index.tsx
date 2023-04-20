import { useState, useEffect } from 'react'
import { Alert, View, TextInput, ScrollView, Pressable } from "react-native"
import { X } from "phosphor-react-native"

import { THEME } from "../../styles/theme"
import { Button, Logo, Points, Text } from "../../components"
import { DateUtils, NumberUtils, QuestionUtils } from '../../../utils'
import { IOperator, IQuestion } from '../../../@types'

export function Home () {
  const [question, setQuestion] = useState<IQuestion>({} as IQuestion)

  const [answer, setAnswer] = useState<string>('')

  const [time, setTime] = useState<number>(0)
  const [started, setStarted] = useState<boolean>(true)

  useEffect(() => {
    if (!started) return
    setTimeout(() => {
      setTime(time + 1)
    }, 1000)
  }, [time])

  useEffect(() => {
    generateQuestion()
    console.log('Gener', time)

  }, [])

  const handleStart = () => {
    setStarted(true)
  }

  const handleStop = () => {
    setTime(0)
    setStarted(false)
  }

  const generateQuestion = () => {
    handleStart()
    const operators = [IOperator.plus, IOperator.multiply, IOperator.minus, IOperator.division]

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

  const handleRemove = (quest: IQuestion) => {
    QuestionUtils.quetions = [...QuestionUtils.quetions].
      filter(questItem => questItem.date != quest.date)
  }

  const handleConfirme = () => {
    handleStop()
    if (!answer) {
      Alert.alert('Aviso', 'Informe o resultado')
    } else {
      const rightResult = QuestionUtils.execCalc(question.value1, question.value2, question.operator)

      const result = `Resposta certa:\t ${buildOperation({ ...question, answer: rightResult })}\n` +
        `Sua resposta:\t\t\t  ${buildOperation({ ...question, answer: Number(answer) })}`

      QuestionUtils.add({
        ...question,
        isRight: rightResult === Number(answer),
        answer: Number(answer),
        seconds: time,
        time: DateUtils.secondsToTime(time),
        date: new Date()
      })

      if (rightResult == Number(answer)) {
        Alert.alert('Acertou!', result)
        setTimeout(() => {
          generateQuestion()
        }, 100)
      } else {
        Alert.alert('Errou!', result)
        setTimeout(() => {
          generateQuestion()
        }, 100)
      }
      setAnswer('')
    }

  }

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
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Points
          points={QuestionUtils.quetions.filter(quest => !quest.isRight).length}
          type="wrong"
        />
        <Text text={DateUtils.secondsToTime(time)}
          style={{
            fontFamily: THEME.fonts.medium,
            fontSize: THEME.fontSizes.md
          }}
        />
        <Points
          points={QuestionUtils.quetions.filter(quest => quest.isRight).length}
          type="right"
        />
      </View>

      <View
        style={{
          rowGap: 24,
        }}
      >
        <ScrollView>
          <View
            style={{
              height: '100%',
              flex: 1,
              marginVertical: 5,
            }}
          >
            <View style={{
              alignItems: 'center',
              paddingVertical: 16,
              marginTop: 8
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
                  text={buildOperation(question)}
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
              </View>
              <Button
                style={{
                  backgroundColor: THEME.colors.gray[500]
                }}
                onPress={handleConfirme}
              >
                <Text text="CONFIRMAR"
                  style={{
                    fontSize: THEME.fontSizes.lg,
                    fontFamily: THEME.fonts.heading,
                    color: THEME.colors.gray[800]
                  }}
                />
              </Button>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  rowGap: 4,
                  marginTop: 8,
                  backgroundColor: THEME.colors.gray[200],
                  padding: 4
                }}
              >
                <Text text={`Histórico (${QuestionUtils.quetions.length})`}
                  style={{ minWidth: 15, fontFamily: THEME.fonts.heading, fontSize: THEME.fontSizes['xl'] }}
                />
                {QuestionUtils.quetions.sort((a, b) => {
                  const x = a.date.getTime(),
                    y = b.date.getTime()
                  if (x > y) {
                    return -1
                  }
                  if (x < y) {
                    return 1
                  }
                  return 0
                }).map((quest, i) => (
                  <View key={i}
                    style={{
                      flexDirection: 'row',
                      backgroundColor: THEME.colors.gray[700],
                      gap: 4,
                      padding: 8,
                    }}
                  >
                    <Text text={quest.value1.toString()}
                      style={{ minWidth: 15, fontFamily: THEME.fonts.heading }}
                    />
                    <Text text={quest.operator}
                      style={{ minWidth: 15, fontFamily: THEME.fonts.heading }}
                    />
                    <Text text={quest.value2.toString()}
                      style={{ minWidth: 15, fontFamily: THEME.fonts.heading }}
                    />
                    <Text text={'='}
                      style={{ minWidth: 15, fontFamily: THEME.fonts.heading }}
                    />
                    <Text text={quest.answer.toString()}
                      style={{ minWidth: 15, fontFamily: THEME.fonts.heading }}
                    />
                    <Text text={quest.isRight ? 'Acertou' : 'Errou'}
                      style={{
                        marginLeft: 4,
                        fontFamily: THEME.fonts.heading,
                        textAlign: 'right',
                        // backgroundColor: 'black'
                      }}
                    />
                    <Pressable onPress={() => handleRemove(quest)}
                      style={{
                        flex: 1,
                        alignItems: 'flex-end',
                      }}>
                      <X color={THEME.colors.red[800]} />
                    </Pressable>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}