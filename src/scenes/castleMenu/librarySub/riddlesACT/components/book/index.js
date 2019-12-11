import React from 'react';
import Page from '../page';
import styled from 'styled-components';

const Book = (props) => {
  const setor = (
    <Right>
      <Page
        text={props.answer}
        isPanelClean={props.isPanelClean}
        showAnswer={props.showAnswer}
      ></Page>
    </Right>
  );

  return (
    <BookDiv>
      <PagesContainer>
        <Left>
          <Page
            title="O que é, o que é?"
            text={props.question}
          ></Page>
        </Left>
        {true ? setor : ''}
      </PagesContainer>
    </BookDiv>
  );
};

const PagesContainer = styled.div`
  display: flex;
  position: relative;
  height: 80%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  padding-left: 5%;
  text-align: center;
`;

const BookDiv = styled.div`
  background-color: rgba(0, 0, 0, 0);
  height: 80%;
  position: relative;
  margin: 30px;
  top: 2%;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  float: right;
  display: block;
  position: relative;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  float: left;
  display: block;
  position: relative;
`;

export default Book;
