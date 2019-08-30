import React from 'react';
import Word from './Word';
import { connect } from 'react-redux';
import { removeWord } from './../actions/actionCreators';
import './AnswerGrid.css';

const AnswerGrid = ({ words, removeWord }) => {
  return (
    <div className="answerGrid">
      {words.map((word, i) => (
        <Word key={`answer${i}`} word={word} addWord={removeWord} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    words: state.answerGrid
  };
};

export default connect(
  mapStateToProps,
  { removeWord }
)(AnswerGrid);
