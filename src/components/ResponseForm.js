import React, { Component } from "react";
import Indico from "../indico";
import Question from "./Question";
import buildResponse from "../buildResponse";

export default class ResponseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      currentQuestion: 0,
      results: []
    };
  }

  handleType(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit() {
    const { text, currentQuestion, results } = this.state;
    Indico.analyze(text).then(response => {
      this.setState({
        results: [],
        test: console.log(buildResponse(response.data)),
        currentQuestion: currentQuestion + 1,
        text: ""
      });
    });
  }

  render() {
    const { text, results, currentQuestion } = this.state;
    return (
      <div>
        <Question currentQuestion={currentQuestion} />
        <textarea value={text} onChange={e => this.handleType(e)} />
        <br />
        <button onClick={() => this.handleSubmit()}>Submit</button>
        {results.length > 0 && (
          <div>
            <h4>Results</h4>
            <p>{results}</p>
          </div>
        )}
      </div>
    );
  }
}
