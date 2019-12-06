import React from 'react';
import Book from '../book';
import './background.css';

const Background = (props) => {
  return (
    <div className="background">
      <Book question={props.question} answer={props.answer} showAnswer={props.showAnswer}></Book>
    </div>
  );
};

export default Background;
