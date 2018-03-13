import React from "react";
import styled from "styled-components";
import questions from "../data/questions";
import { H3 } from "../style";

const QuestionContainer = styled.div`
  grid-row: span 2;
  grid-column: span 2;
`;

const Question = props => {
  const currentQuestion = questions[props.currentQuestion];
  return (
    <QuestionContainer>
      <H3>{currentQuestion}</H3>
    </QuestionContainer>
  );
};

export default Question;
