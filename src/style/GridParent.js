import styled from "styled-components";

const GridParent = styled.div`
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  height: 100%;
`;

export default GridParent;
