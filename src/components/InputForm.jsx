import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import StateContext from '../context';


const Input = styled.input`
  background-color: rgb(241, 236, 228);
  border: none;
  border-bottom: 1.5px solid rgb(38, 38, 39);
  font-size: 2rem;
  
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: rgb(38, 38, 39);
  color: white;
  font-size: 2rem;
  border: none;
  border-radius: 3.5px;
  margin: 20px;
  width: 100px;
  
  &:focus {
    outline: none;
  }
`;

const InputForm = () => {
  const [questionInput, setQuestionInput] = useState('');

  const [value, dispatch] = useContext(StateContext);

  const handleChange = (e) => {
    setQuestionInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ACTION_GET_RESPONSE',
      question: questionInput,
    });
    setQuestionInput('');
    // console.log('submitted', questionInput);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input type="text" value={questionInput} placeholder="Ask me anything" onChange={(e) => handleChange(e)} />
      <Button type="submit">Go!</Button>
    </form>
  );
};


export default InputForm;
