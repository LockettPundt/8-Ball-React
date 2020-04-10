/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import { StateProvider } from './context';
import './App.css';
import InputForm from './components/InputForm';
import EightBall from './components/EightBall';

function App() {
  const initialState = {
    question: '',
    response: '',
  };

  const reducer = (state, action) => {
    const { question } = action;
    switch (action.type) {
      case 'ACTION_GET_RESPONSE':
        return {
          ...state,
          question,
        };
      default:
        return state;
    }
  };


  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
        <EightBall />
      </StateProvider>
    </div>
  );
}

export default App;
