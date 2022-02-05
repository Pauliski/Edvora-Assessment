import styled from "styled-components";

export const GroupProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1001px) {
    flex-direction: row;
  }
`;
export const GroupProductWrapper = styled.div`
  width: 100%;
`;

export const GroupProductFallbackText = styled.h3`
  font-size: 1.5625rem;
  color: #fff;
`;
export const GroupProductCompanyName = styled.div`
  display: none;
  @media only screen and (min-width: 1001px) {
    display: block;
  }
`;
