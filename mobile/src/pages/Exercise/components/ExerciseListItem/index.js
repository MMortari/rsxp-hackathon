import React, { useState } from 'react';
import { Alert } from 'react-native';

import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
  Box,
  Title,
  Line,
  Code,
  AnswersBox,
  AnswersTitle,
  AnswersBoxRow,
  AnswersItem,
  AnswersText,
  VerifyAnswers,
  VerifyText,
} from './styles';

export default function ExerciseListItem({ navigation }) {
  const [inputList, setInputList] = useState([
    {
      id: 1,
      name: 'Resposta 1',
      value: null,
    },
    {
      id: 2,
      name: 'Resposta 2',
      value: null,
    },
  ]);

  const [answers, setAnswers] = useState({
    answer1: null,
    answer2: null,
  });

  const [questions, setQuestions] = useState([
    {
      id: 1,
      visible: true,
      title: 'Escolha o valor da Resposta 1',
      options: [
        {
          id: 1,
          value: 1,
          name: '1',
        },
        {
          id: 2,
          value: 2,
          name: '2',
        },
        {
          id: 3,
          value: 3,
          name: '3',
        },
      ],
    },
    {
      id: 2,
      visible: false,
      title: 'Escolha o valor da Resposta 2',
      options: [
        {
          id: 1,
          value: 1,
          name: '1',
        },
        {
          id: 2,
          value: 2,
          name: '2',
        },
        {
          id: 3,
          value: 3,
          name: '3',
        },
      ],
    },
  ]);

  const [verifyAnswers, setVerifyAnswers] = useState(false);

  function handleVerifyAnswers() {
    if (answers.answer1 === 1 && answers.answer2 === 2) {
      Alert.alert('Parabéns', 'Respostas corretas', [
        { text: 'ok', onPress: () => navigation.pop() },
      ]);
    } else {
      Alert.alert('Ops', 'Você errou');
    }
  }

  const codeString = `const places = [
    {
      id: 1,
      place: 'Berlin',
      country: 'Alemanha'
    },
    {
      id: 2,
      place: 'Pearl Harbor',
      country: 'Estados Unidos'
    },
    {
      id: 3,
      place: 'Londres',
      country: 'Inglaterra'
    }]

    const attackers = [{
      id: 1,
      country: "Japão"
    }, {
      id: 2,
      country: "Alemanha",
    }, {
      id: 3,
      country: "Itália"
    }]

    const attacker = attackers.find(a => a.id == @input1);
    const {place, country} = places.find(p => p.id == @input2)

    console.log(attacker.country + 'ataca' + place + 'no seguinte país: ' + country)`
    .replace('@input1', inputList[0].name)
    .replace('@input2', inputList[1].name);

  return (
    <Box>
      <Title>
        A Segunda Grande Guerra (1939-1945), a partir de 7 de dezembro de 1941,
        adquire um caráter mundial quando os:
      </Title>
      <Line />
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        highlighter={'hljs'}
      >
        {codeString}
      </SyntaxHighlighter>
      {/* <Code>
      {`const places = [${'\n'}${'\xa0'}${'\xa0'}{${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}id: 1,${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}place: 'Berlin',${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}country: 'Alemanha'${'\n'} ${'\xa0'}${'\xa0'}},${'\n'} ${'\xa0'}${'\xa0'}{${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}id: 2,${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}place: 'Pearl Harbor',${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}country: 'Estados Unidos'${'\n'} ${'\xa0'}${'\xa0'}},${'\n'} ${'\xa0'}${'\xa0'}{${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}id: 3,${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}place: 'Londres',${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}country: 'Inglaterra'${'\n'} ${'\xa0'}${'\xa0'}}]${'\n'} ${'\n'} const attackers = [{${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}id: 1,${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}country: "Japão"${'\n'} ${'\xa0'}${'\xa0'}}, {${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}id: 2,${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}country: "Alemanha",${'\n'} ${'\xa0'}${'\xa0'}}, {${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}id: 3,${'\n'} ${'\xa0'}${'\xa0'}${'\xa0'}${'\xa0'}country: "Itália"${'\n'} ${'\xa0'}${'\xa0'}}]${'\n'} ${'\n'} const attacker = attackers.find(a => a.id == @input1);${'\n'} const {place, country} = places.find(p => p.id == @input2)${'\n'} ${'\n'} console.log(attacker.country + 'ataca' + place + 'no seguinte país: ' + country)`
          .replace('@input1', inputList[0].name)
          .replace('@input2', inputList[1].name)}
      </Code> */}
      <Line />
      <AnswersBox>
        {questions.map(
          item =>
            item.visible && (
              <>
                <AnswersTitle>{item.title}</AnswersTitle>
                <AnswersBoxRow>
                  {item.options.map(opt => (
                    <AnswersItem
                      onPress={() => {
                        setAnswers({
                          ...answers,
                          [`answer${item.id}`]: opt.value,
                        });
                        setInputList([
                          ...inputList,
                          (inputList[item.id - 1].name = opt.value),
                        ]);
                        setQuestions([
                          ...questions,
                          (questions[item.id - 1].visible = false),
                          (questions[item.id].visible = true),
                        ]);
                        if (item.id === 2) {
                          setVerifyAnswers(true);
                        }
                      }}
                    >
                      <AnswersText>{opt.name}</AnswersText>
                    </AnswersItem>
                  ))}
                </AnswersBoxRow>
              </>
            )
        )}
        {verifyAnswers && (
          <VerifyAnswers onPress={handleVerifyAnswers}>
            <VerifyText>Verificar respostas</VerifyText>
          </VerifyAnswers>
        )}
      </AnswersBox>
    </Box>
  );
}
