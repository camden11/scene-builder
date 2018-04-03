import React, { Component } from "react";
import styled from "styled-components";
import sentimentToColor from "../../utils/sentimentToColor";
import { GridParent } from "../../style";

const ColorBlock = styled.div`
  grid-row: span 12;
  grid-column: span 2;
  transition: background-color 1s;
  background-color: ${props => props.color};
`;

class ResultsColor extends Component {
  render() {
    const { results } = this.props;
    return <ColorBlock color={sentimentToColor(results)} />;
  }
}

export default ResultsColor;
