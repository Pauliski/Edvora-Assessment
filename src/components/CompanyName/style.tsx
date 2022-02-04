import styled from "styled-components";

export const CompanyNameWrapper = styled.div`
  @media only screen and (min-width: 1366px) {
   margin-bottom: 1.3125rem;
  }
`;

export const CompanyNameTitle = styled.h3`
  @media only screen and (min-width: 1366px) {
    /* font-family: serif; */
    font-weight: bold;
    font-size: 35px;
    line-height: 42px;
    color: rgba(255, 255, 255, 0.87);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 1.3125rem;
  }
`;

export const CompanyNameProduct = styled.h4`
  @media only screen and (min-width: 1366px) {
    /* font-family: san-serif; */
    font-weight: 500;
    font-size: 1.5625rem;
    line-height: 1.2;
    color: rgba(255, 255, 255, 0.5);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
