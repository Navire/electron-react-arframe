import React from 'react';
import Page from '../page';
import './book.css';

const Book = (props) => {
  const setor = (
    <div className="right">
      <Page text={props.answer} isPanelClean={props.isPanelClean} showAnswer={props.showAnswer}></Page>
    </div>
  );
  return (
    <div className="book">
      <div className="pagesContainer">
        <div className="left">
          <Page title="O que é, o que é?" text={props.question}></Page>
        </div>
        {true ? setor : ''}
      </div>
    </div>
  );
};

export default Book;
