import React, { Component } from "react";
import styled from "styled-components";
import decimalToPercentage from "../../utils/decimalToPercentage";
import { P, H6, GridParent } from "../../style";

const DataContainer = styled.div`
  grid-row: span 12;
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 10px;
`;

const DataGridSection = styled.div`
  grid-column: span 1;
  text-align: ${props => props.textAlign};
`;

DataGridSection.defaultProps = {
  textAlign: "left"
};

class ResultsData extends Component {
  render() {
    const { results } = this.props;
    return (
      <DataContainer>
        <DataGrid>
          <DataGridSection>
            <H6>Emotion</H6>
            <P>Anger</P>
            <P>Fear</P>
            <P>Joy</P>
            <P>Sadness</P>
          </DataGridSection>
          <DataGridSection textAlign="right">
            <br />
            <P>{decimalToPercentage(results.emotion.anger)}</P>
            <P>{decimalToPercentage(results.emotion.fear)}</P>
            <P>{decimalToPercentage(results.emotion.joy)}</P>
            <P>{decimalToPercentage(results.emotion.sadness)}</P>
          </DataGridSection>
        </DataGrid>
        <DataGrid>
          <DataGridSection>
            <H6>Topics</H6>
            <P>Health</P>
            <P>Nostalgia</P>
            <P>Relationships</P>
            <P>Sex</P>
            <P>School / Work</P>
          </DataGridSection>
          <DataGridSection textAlign="right">
            <br />
            <P>{decimalToPercentage(results.topics.health)}</P>
            <P>{decimalToPercentage(results.topics.nostalgia)}</P>
            <P>{decimalToPercentage(results.topics.relationships)}</P>
            <P>{decimalToPercentage(results.topics.romance)}</P>
            <P>
              {decimalToPercentage(
                Math.max(results.topics.school, results.topics.jobs)
              )}
            </P>
          </DataGridSection>
        </DataGrid>
        <DataGrid>
          <DataGridSection>
            <H6>Overall Sentiment</H6>
          </DataGridSection>
          <DataGridSection textAlign="right">
            <H6>{decimalToPercentage(results.sentiment)}</H6>
          </DataGridSection>
        </DataGrid>
      </DataContainer>
    );
  }
}

export default ResultsData;
