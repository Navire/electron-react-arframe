import React from 'react';
import {
  chave,
  chuva,
  faca,
  luva,
  toalha,
  porta,
} from '../../../assets';
import styled from 'styled-components';

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
      <ImageContainer>
        <Image src={answer}></Image>
      </ImageContainer>
    );
  } else if (!props.showAnswer && props.title) {
    whatToShow = (
      <QuestionBody>
        <BodyFont>{props.text}</BodyFont>
      </QuestionBody>
    );
    question = (
      <PageDiv>
        <TitleFontLeft>{oquee1}</TitleFontLeft>
        <TitleFontRight>{oquee2}</TitleFontRight>
      </PageDiv>
    );
  }
  return (
    <div>
      {question}
      {whatToShow}
    </div>
  );
};

const TitleFontLeft = styled.h1`
  color: #830106;
  font-size: 400%;
  font-family: 'Sail', cursive;
  line-height: 20px;
  text-align: left;
  margin-left: 20%;
`;

const TitleFontRight = styled.h1`
  color: #830106;
  font-size: 400%;
  font-family: 'Sail', cursive;
  line-height: 20px;
  text-align: right;
  margin-left: 20%;
`;

const PageDiv = styled.div`
  background-color: rgba(0, 0, 0, 0);
  width: 90%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0);
  position: relative;
  margin-left: 0px;

  color: #000000;
`;

const BodyFont = styled.p`
  font-size: 28px;
  color: #000000;
  font-family: 'Arial', sans-serif;
`;

const QuestionBody = styled.div`
  margin-top: 10%;
  margin-left: 20%;
  margin-right: 20%;
  text-align: center;
`;

const Image = styled.img`
  width: 40%;
  position: relative;
  border: double 20px #830106;
  display: block;
  margin: auto;
  margin-top: 10%;
`;

const ImageContainer = styled.div`
  display: contents;
  position: relative;
  margin: auto auto;
  text-align: center;
  width: 50%;
`;

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
