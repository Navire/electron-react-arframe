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
    endpoint: 'http://10.10.0.171:3005',
  };

  fromBitToChar = (response) => response.map((item) => BlockTranslation.red_blocks[item]);

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('data', (data) => {
      console.log('Dados recebidos: ', data);
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

  checkAnswer = (tryAnswer, rightAnswer) => {
    let right = false;
    console.log('rightAnswer: ', rightAnswer);
    if (tryAnswer === rightAnswer) {
      right = true;
      let question = parseInt(this.state.question);
      let answer = parseInt(this.state.answer);
      question++;
      answer++;
      this.setState({ question: question.toString(), answer: answer.toString() });
    }
    return right;
  };

  showCongratulations = (rightAnswer) => {
    if (rightAnswer) setTimeout(() => alert('Parabéns! Você acertou!'), 500);
  };

  render() {
    const stringAnswer = this.fromArrayToString(this.state.response);
    const answer = this.checkAnswer(stringAnswer, activity.answers[this.state.answer]);
    this.showCongratulations(answer);
    console.log('questão: ', activity.questions[this.state.question]);
    console.log('resposta: ', activity.answers[this.state.answer]);
    return (
      <div>
        <Background
          showAnswer={answer}
          question={activity.questions[this.state.question]}
          answer={activity.answers[this.state.answer]}
        ></Background>
        <PanelBottom response={this.state.response}></PanelBottom>
      </div>
    );
  }
}

export default RiddlesACT;
