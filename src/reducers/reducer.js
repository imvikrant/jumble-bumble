import { ADD_WORD, REMOVE_WORD, NEW_SENTENCE } from './../actions/actionTypes';
import sentenceList from '../sentenceList';

const isArrayEqual = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }

  return true;
};

function shuffle(arr) {
  const array = [...arr];

  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const initialState = {
  sentence: sentenceList[0].split(' '),
  answerGrid: [],
  optionGrid: shuffle(sentenceList[0].split(' ')),
  sentenceIndex: 0,
  correct: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORD:
      const newState = {
        ...state,
        answerGrid: state.answerGrid.concat(action.word),
        optionGrid: state.optionGrid.filter(word => word != action.word)
      };

      if (isArrayEqual(newState.answerGrid, newState.sentence)) {
        return { ...newState, correct: 'You are correct' };
      } else {
        return newState;
      }

    case REMOVE_WORD:
      return {
        ...state,
        answerGrid: state.answerGrid.filter(word => word != action.word),
        optionGrid: state.optionGrid.concat(action.word)
      };

    case NEW_SENTENCE:
      const sentenceIndex =
        state.sentenceIndex + 1 === sentenceList.length
          ? 0
          : state.sentenceIndex + 1;
      const sentenceArray = sentenceList[sentenceIndex].split(' ');
      return {
        ...state,
        sentence: sentenceArray,
        sentenceIndex,
        answerGrid: [],
        optionGrid: shuffle(sentenceArray),
        correct: null
      };

    default:
      return state;
  }
};

export default reducer;
