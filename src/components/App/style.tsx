import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.1479% 3.1479% calc(5.49% - 19px) 3.0015%;

  @media only screen and (min-width: 1001px) {
    display: block;
    flex-direction: row;
    width: 100%
  }
`;
