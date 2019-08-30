import React from 'react';
import { connect } from 'react-redux';
import { nextSentence } from './../actions/actionCreators';

const NextButton = ({ nextSentence }) => {
  return (
    <div>
      <button onClick={nextSentence}>Next</button>
    </div>
  );
};

export default connect(
  null,
  { nextSentence }
)(NextButton);
