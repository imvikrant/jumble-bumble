import React from 'react';
import { connect } from 'react-redux';
import './Word.css';

const Word = ({ word, addWord }) => {
  return (
    <div className="word" onClick={() => addWord(word)}>
      {word}
    </div>
  );
};

export default Word;
