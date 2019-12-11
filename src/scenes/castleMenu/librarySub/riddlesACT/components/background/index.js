import React from 'react';
import Book from '../book';
import './background.css';
import UpperBar from '../upperBar';
import DigitalPanel from '../../../../../general/digitalPanel';

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
      <DigitalPanel />
    </div>
  );
};

export default Background;
