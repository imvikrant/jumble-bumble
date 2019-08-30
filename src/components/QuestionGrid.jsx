import React from 'react';
import Word from './Word';
import { connect } from 'react-redux';
import './QuestionGrid.css';

const QuestionGrid = ({ words }) => {
  return <div className="questionGrid">{words.join(' ')}</div>;
};

const mapStateToProps = state => {
  return {
    words: state.sentence
  };
};

export default connect(mapStateToProps)(QuestionGrid);
