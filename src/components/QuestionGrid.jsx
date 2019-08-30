import React from 'react';
import Word from './Word';
import { connect } from 'react-redux';

const QuestionGrid = ({ words }) => {
  return <div>{words.join(' ')}</div>;
};

const mapStateToProps = state => {
  return {
    words: state.sentence
  };
};

export default connect(mapStateToProps)(QuestionGrid);
