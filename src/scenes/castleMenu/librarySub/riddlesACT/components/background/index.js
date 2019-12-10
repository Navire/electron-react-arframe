import React from 'react';
import Book from '../book';
import './background.css';
import UpperBar from '../upperBar';

const Background = (props) => {
  return (
    <div className="background">
      <UpperBar />
      <Book
        isPanelClean={props.isPanelClean}
        question={props.question}
        answer={props.answer}
        showAnswer={props.showAnswer}
      ></Book>
    </div>
  );
};

export default Background;
