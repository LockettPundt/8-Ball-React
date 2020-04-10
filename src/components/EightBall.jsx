/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StateContext from '../context';
import InputForm from './InputForm';


const BigEightBall = styled.div`
  background-image: radial-gradient(circle, #8f8b8b, rgb(38, 38, 39));
  margin: 100px auto;
  width: 500px;
  height:500px;
  max-width: 1000px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const ResponseDiv = styled.div`
  background-color: white;
  align-self: center;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const Eight = styled.h1`
  font-size: 6rem;
  text-align: center;

`;

const ReplyDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
`;

const Info = styled.p`
  font-size: 2rem;
`;


const EightBall = () => {
  const [value, dispatch] = useContext(StateContext);
  const [answer, setAnswer] = useState('');


  useEffect(() => {
    const fetchResponse = async () => {
      const response = await axios.get(`https://8ball.delegator.com/magic/JSON/${value.question}`);
      // console.log('this is the response to the question', response.data.magic.answer);
      setAnswer(response.data.magic.answer);
    };

    fetchResponse();
  }, [value.question]);


  const question = value.question !== ''
    ? (
      <Info>
        You have asked the magic 8-Ball :
        {' '}
        {value.question}
      </Info>
    )
    : <Info>This is the Magic 8-Ball!</Info>;

  const reply = answer !== ''
    ? (
      <ReplyDiv>
        {answer}
      </ReplyDiv>
    )
    : (<Eight>8</Eight>);

  return (
    <>
      <BigEightBall>
        <ResponseDiv>
          {reply}
        </ResponseDiv>
      </BigEightBall>
      <div>
        {question}

      </div>
      <InputForm />
    </>
  );
};


export default EightBall;
