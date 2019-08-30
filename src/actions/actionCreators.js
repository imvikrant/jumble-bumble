import { ADD_WORD, REMOVE_WORD, NEW_SENTENCE } from './actionTypes';

export const addWord = word => {
  return {
    type: ADD_WORD,
    word
  };
};

export const removeWord = word => {
  return {
    type: REMOVE_WORD,
    word
  };
};

export const nextSentence = word => {
  return {
    type: NEW_SENTENCE
  };
};
