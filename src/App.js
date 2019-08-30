import React from 'react';
import logo from './logo.svg';
import './App.css';
import OptionGrid from './components/OptionGrid';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import AnswerGrid from './components/AnswerGrid';
import QuestionGrid from './components/QuestionGrid';
import NextButton from './components/NextButton';

function App() {
  return (
    <Provider store={createStore(reducer)}>
      <div className="App">
        <QuestionGrid />
        <AnswerGrid />
        <OptionGrid />
        <NextButton />
      </div>
    </Provider>
  );
}

export default App;
