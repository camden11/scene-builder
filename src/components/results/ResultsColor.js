import React, { Component } from "react";
import styled from "styled-components";
import { GridParent } from "../../style";

const ColorBlock = styled.div`
  grid-row: span 12;
  grid-column: span 1;
  background-color: black;
`;

class ResultsColor extends Component {
  render() {
    return <ColorBlock />;
  }
}

export default ResultsColor;
