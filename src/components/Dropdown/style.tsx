import styled from "styled-components";

export const SelectWrapper = styled.div`
  @media only screen and (min-width: 1366px) {
    margin-top: 0.78125rem;
  }
`;
export const Select = styled.select`
  @media only screen and (min-width: 1366px) {
    font-family: -apple-system, BlinkMacSystemFont, "San Francisco", sans-serif;
    font-size: 1.0625rem;
    font-weight: 400;
    line-height: 1.193529;
    width: 10.528125rem;
    height: 2.34375rem;
    background-color: #232323;
    border-radius: 0.2929846875rem;
    color: #ffffff;
    outline: none;
    appearance: none;
    background-image: url("/arrowdown.svg");
    background-repeat: no-repeat;
    background-size: 0.75rem;
    padding: 0 0 0 0.8125rem;
    background-position: 92.8762% center;
  }
`;
export const SelectOption = styled.option`
  @media only screen and (min-width: 1366px) {
    width: 10.528125rem;
    border-radius: 0.2929846875rem;
  }
`;
