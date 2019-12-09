import React, { Fragment, Component } from 'react';
import PanelBottom from '../../../general/panelBottom';
import Background from './components/background';
import activity from './questions.json';
import socketIOClient from 'socket.io-client';
import BlockTranslation from '../../../general/block_translation.json';

class RiddlesACT extends Component {
  state = {
    question: '1',
    answer: '1',
    panel: '',
    response: new Array(15).fill(''),
    endpoint: 'localhost:3005',
    answerBuffer: '',
    errors: [],
  };

  fromBitToChar = (response) => response.map((item) => BlockTranslation.red_blocks[item]);

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('data', (data) => {
      // console.log('Dados recebidos: ', data);
      // const data = '[121, 141, 124, 226, 118, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]';
      const tableSymbolNumbers = JSON.parse(data);
      const tableSymbols = this.fromBitToChar(tableSymbolNumbers);
      this.setState({ response: tableSymbols });
    });
  }

  fromArrayToString = (array) => {
    let stringRet = '';
    array.map((item) => {
      stringRet += item ? item : ' ';
    });
    return stringRet.trim();
  };

  checkWrongAnswer = false;
  isCleaningPanel = 0;

  findError = (tryWord, rightWord) => {
    const arrTryWord = tryWord.split('');
    const arrRightWord = rightWord.split('');

    let errors = [];

    for (let i = 0; i < arrRightWord.length; i++) {
      if (arrTryWord[i] !== arrRightWord[i]) {
        errors.push({ wrongValue: arrTryWord[i], wrongPosition: i });
      }
    }
    if (arrTryWord > arrRightWord) {
      for (let i = arrRightWord.length; i < arrTryWord.length; i++) {
        errors.push({ wrongValue: arrTryWord[i], wrongPosition: i });
      }
    }
    return errors;
  };

  previousPanelWord = '';

  checkAnswer = (tryAnswer, rightAnswer) => {
    let right = false;
    const tamTryAnswer = tryAnswer.length;
    const tamRightAnswer = rightAnswer.length;
    console.log('TryAnswer: ', tryAnswer);
    if (tamTryAnswer < tamRightAnswer) {
      this.checkWrongAnswer = false;
    } else if (tamTryAnswer >= tamRightAnswer) {
      if (tryAnswer === rightAnswer) {
        right = true;
        this.checkWrongAnswer = false;
      } else {
        if (this.previousPanelWord != tryAnswer) {
          this.previousPanelWord = tryAnswer;
          const errorsFound = this.findError(this.previousPanelWord, rightAnswer);
          console.log('Erros: ', errorsFound);
          this.setState({ errors: errorsFound });
        }
        this.checkWrongAnswer = true;
      }
    }
    return right;
  };

  showCongratulations = (rightAnswer) => {
    if (rightAnswer) return <div>PARABÉNS! VOCÊ ACERTOU! REMOVA OS BLOCOS DA MESA PARA A PRÓXIMA FASE!</div>;
    if (this.checkWrongAnswer)
      return <div>RESPOSTA ERRADA! CORRIJA OS ERROS: {this.state.errors.map((item) => item.wrongValue)}</div>;
  };

  render() {
    const stringAnswer = this.fromArrayToString(this.state.response) ? this.fromArrayToString(this.state.response) : '';
    //const isAnswer = false;
    const isAnswer = this.checkAnswer(stringAnswer, activity.answers[this.state.answer]);
    console.log('CleaningPanel: ', this.isCleaningPanel);
    console.log('isAnswer: ', isAnswer);

    let question = parseInt(this.state.question);
    let answer = parseInt(this.state.answer);

    if (isAnswer) {
      this.isCleaningPanel = 1;
    }
    if (this.isCleaningPanel === 1 && (!stringAnswer || stringAnswer.length === 0)) {
      this.isCleaningPanel = 2;
    }

    if (this.isCleaningPanel === 2) {
      question++;
      answer++;
      const arrQuestions = Object.keys(activity.questions);
      console.log('Vetor de questões: ', arrQuestions);
      const tamActivities = arrQuestions.length;
      console.log('Total de atividades: ', tamActivities);
      this.isCleaningPanel = 0;
      if (question <= tamActivities) this.setState({ question: question, answer: answer });
    }
    console.log('Question: ', question);
    return (
      <div>
        {this.showCongratulations(isAnswer)}
        <Background
          isPanelClean={this.isCleaningPanel > 0}
          showAnswer={this.isAnswer}
          question={activity.questions[this.state.question]}
          answer={this.state.answerBuffer.length > 0 ? this.state.answerBuffer : activity.answers[this.state.answer]}
        ></Background>
        <PanelBottom response={this.state.response}></PanelBottom>
      </div>
    );
  }
}

export default RiddlesACT;
