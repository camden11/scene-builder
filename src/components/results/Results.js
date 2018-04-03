import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { GridParent } from "../../style";
import ResultsColor from "./ResultsColor";
import ResultsData from "./ResultsData";
import emptyResults from "../../data/emptyResults";

const ResultsContainer = styled.div`
  grid-row: span 5;
  grid-column: span 2;
`;

class Results extends Component {
  render() {
    const { results } = this.props;
    const currentResults =
      results.length > 0 ? results[results.length - 1] : emptyResults;
    return (
      <ResultsContainer>
        <GridParent>
          <ResultsColor results={currentResults} />
        </GridParent>
      </ResultsContainer>
    );
  }
}

const mapStateToProps = state => ({
  results: state.indico.results
});

export default connect(mapStateToProps)(Results);
