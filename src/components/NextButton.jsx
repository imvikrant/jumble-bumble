import React from 'react';
import { connect } from 'react-redux';
import { nextSentence } from './../actions/actionCreators';
import './NextButton.css';

const NextButton = ({ nextSentence }) => {
  return (
    <div>
      <button className="nextButton" onClick={nextSentence}>
        Next
      </button>
    </div>
  );
};

export default connect(
  null,
  { nextSentence }
)(NextButton);
