import React, { Fragment, useState, useEffect } from 'react';
import questions from './questions.json';
import Book from './book/';
import { ModalActivity } from '../../general/modalActivity/';
import BlockTranslation from '../../general/blockTranslation.json';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RiddlesACT = (props) => {
  const [words, setWord] = useState(questions.answers[1]);

  const [index, setIndex] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);

  const [clean, setClean] = useState(false);

  const { buffer } = props;

  const [isFinished, setFinished] = useState(false);

  useEffect(() => {
    const blocks = buffer
      .filter((item) => item !== 255)
      .map((item) => BlockTranslation.red_blocks[item]);
    const panel = blocks.join('');

    if (!showAnswer) {
      if (words === panel) {
        setShowAnswer(true);
      }
    } else {
      if (blocks.length === 0) {
        setClean(false);
        setShowAnswer(false);
        if (index < questions.length) {
          setWord(questions.answers[index + 1]);
          setIndex(index + 1);
        } else {
          setFinished(true);
        }
      }
    }
  }, [buffer]);

  if (isFinished) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }

  return (
    <Fragment>
      <Book
        isPanelClean={clean}
        question={questions.questions[index]}
        answer={questions.answers[index]}
        showAnswer={showAnswer}
      />
      <ModalActivity hidden={showAnswer} />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.panelBlocks,
  };
};

export default connect(mapStateToProps, null)(RiddlesACT);
