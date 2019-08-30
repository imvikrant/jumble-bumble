import React from 'react';
import { connect } from 'react-redux';
import Word from './Word';
import { addWord } from './../actions/actionCreators';

const OptionGrid = ({ words, addWord, correct }) => {
  return (
    <div>
      {correct ||
        words.map((word, i) => (
          <Word key={`option${i}`} word={word} addWord={addWord} />
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    words: state.optionGrid,
    correct: state.correct
  };
};

export default connect(
  mapStateToProps,
  { addWord }
)(OptionGrid);
