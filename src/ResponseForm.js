import React, { Component } from "react";
import Indico from "./indico";

export default class ResponseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      result: null
    };
  }

  handleType(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit() {
    const { text } = this.state;
    Indico.sentiment(text).then(response => {
      this.setState({ result: response.data.results });
    });
  }

  render() {
    const { text, result } = this.state;
    return (
      <div>
        <textarea value={text} onChange={e => this.handleType(e)} />
        <br />
        <button onClick={() => this.handleSubmit()}>Submit</button>
        {result && (
          <div>
            <h4>Results</h4>
            <p>{result}</p>
          </div>
        )}
      </div>
    );
  }
}
