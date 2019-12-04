import React, { Fragment, Component } from 'react';
import { BlockBt, correct, wrong } from './';
import Content001 from './content001';
import Content002 from './content002';

class SquareTasks extends Component {
  correctAudio = new Audio(correct);
  wrongAudio = new Audio(wrong);

  correctAnswer = () => {
    this.correctAudio.play();
  };

  // test = () => {
  //   console.log('electron', electron);
  // };

  wrongAnswer = () => {
    this.wrongAudio.play();
  };

  render() {
    return (
      <Fragment>
        <div style={style.title}>Qual a comparação completa entre os conjuntos?</div>

        <div style={style.square1}>
          <Content001 />
        </div>

        <div style={style.square2}>
          <Content002 />
        </div>

        <BlockBt onclick={() => this.correctAnswer()} value=">" bottom="5%" left="20%" />
        <BlockBt onclick={() => this.wrongAnswer()} value="=" bottom="5%" left="35%" />
        <BlockBt onclick={() => this.wrongAnswer()} value="!=" bottom="5%" left="50%" />
        <BlockBt onclick={() => this.wrongAnswer()} value="<" bottom="5%" left="65%" />
      </Fragment>
    );
  }
}

const style = {
  square1: {
    top: '20%',
    left: '10%',
    width: '35%',
    height: '55%',
    position: 'absolute',
    backgroundColor: '#dda821',
  },
  square2: {
    top: '20%',
    left: '55%',
    width: '35%',
    height: '55%',
    position: 'absolute',
    backgroundColor: '#dda821',
  },
  title: {
    top: '10%',
    left: '30%',
    position: 'absolute',
    fontSize: '4vh',
    color: 'white',
  },
};

export default SquareTasks;
