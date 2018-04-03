import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { analyzeResponse } from "../actions/IndicoActions";
import styled from "styled-components";
import Question from "./Question";
import { GridParent } from "../style";

const ResponseFormContainer = styled.div`
  grid-row: span 9;
  grid-column: span 2;
`;

const TextArea = styled.textarea`
  font-family: "Work Sans";
  width: 100%;
  resize: none;
  font-size: 14px;
  border: none;
  &:focus {
    outline: none;
  }
  grid-row: span 7;
  grid-column: span 2;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 20px;
  font-family: "Work Sans";
  &:focus {
    outline: none;
  }
  grid-row: 12;
  grid-column: span 1;
`;

class ResponseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      currentQuestion: 0
    };
  }

  componentDidMount() {
    document.getElementById("text-area").focus();
  }

  handleType(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit() {
    const { text, currentQuestion } = this.state;
    const { analyzeResponse } = this.props;
    analyzeResponse(text);
    this.setState({ currentQuestion: currentQuestion + 1, text: "" });
  }

  render() {
    const { text, results, currentQuestion } = this.state;
    return (
      <ResponseFormContainer>
        <GridParent>
          <Question currentQuestion={currentQuestion} />
          <TextArea
            value={text}
            onChange={e => this.handleType(e)}
            id="text-area"
          />
          <br />
          <Button onClick={() => this.handleSubmit()}>Submit</Button>
        </GridParent>
      </ResponseFormContainer>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ analyzeResponse }, dispatch);

export default connect(null, mapDispatchToProps)(ResponseForm);
