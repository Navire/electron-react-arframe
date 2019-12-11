import React from 'react';
import Book from '../book';
import './background.css';
import UpperBar from '../upperBar';
import DigitalPanel from '../../../../../general/digitalPanel';
import { ModalActivity } from '../../../../../general/modalActivity';

const Background = (props) => {
  return (
    <div className="background">
      <UpperBar />
      <ModalActivity hidden={props.showAnswer} />
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
