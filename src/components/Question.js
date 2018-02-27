import React, { Component } from "react";
import questions from "../data/questions";

const Question = props => {
  const currentQuestion = questions[props.currentQuestion];
  return <h3>{currentQuestion}</h3>;
};

export default Question;
