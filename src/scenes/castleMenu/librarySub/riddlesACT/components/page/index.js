import React from 'react';
import './page.css';
import {
  chave,
  chuva,
  faca,
  luva,
  toalha,
  porta,
} from '../../../../../assets';

const Page = (props) => {
  // console.log('props.title: ', props.title);
  const oquee = props.title ? props.title.split(',') : null;
  const oquee1 = oquee ? oquee[0] + ',' : null;
  const oquee2 = oquee ? oquee[1] : null;
  const answer = getAnswerImage(props.text.toLowerCase());
  let whatToShow = null;
  let question = null;

  if (props.showAnswer && !props.title) {
    whatToShow = (
      <div className="imageContainer">
        <img className="image" src={answer}></img>
      </div>
    );
  } else if (!props.showAnswer && props.title) {
    whatToShow = (
      <div className="questionBody">
        <p className="bodyFont">{props.text}</p>
      </div>
    );
    question = (
      <div className="page">
        <p>
          <h1 className="titleFontLeft">{oquee1}</h1>
          <h1 className="titleFontRight">{oquee2}</h1>
        </p>
      </div>
    );
  }
  return (
    <div>
      {question}
      {whatToShow}
    </div>
  );
};

const getAnswerImage = (imageName) => {
  let answerImage = null;

  if (imageName) {
    switch (imageName) {
      case 'chave':
        answerImage = chave;
        break;
      case 'chuva':
        answerImage = chuva;
        break;
      case 'faca':
        answerImage = faca;
        break;
      case 'luva':
        answerImage = luva;
        break;
      case 'toalha':
        answerImage = toalha;
        break;
      case 'porta':
        answerImage = porta;
        break;
      default:
        answerImage = null;
        break;
    }
  } else {
    answerImage = null;
  }
  return answerImage;
};

export default Page;
