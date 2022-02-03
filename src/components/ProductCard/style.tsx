import styled from "styled-components";

export const ProductCardWraapper = styled.div`
  @media only screen and (min-width: 1366px) {
    width: 13.125rem;
    height: 9.375rem;
    background-color: #232323;
    border-radius: 0.292984rem;
    margin: 20px;
    padding: 0.625rem 0.9375rem 0.875rem 0.75rem;
  }
`;

export const ProductCardFirstSection = styled.div`
  @media only screen and (min-width: 1366px) {
    display: flex;
  }
`;

export const ProductCardImageContainer = styled.div`
  @media only screen and (min-width: 1366px) {
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 0.3125rem;

    background-color: green;
  }
`;
export const ProductCardImage = styled.img`
  @media only screen and (min-width: 1366px) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const ProductCardNameSection = styled.div`
  @media only screen and (min-width: 1366px) {
    margin-left: 1.25rem;
  }
`;
export const ProductCardProductName = styled.h3`
  @media only screen and (min-width: 1366px) {
    width: 5.8125rem;
    font-size: 0.9375rem;
    line-height: 1.2;
    color: #ffffff;
  }
`;
export const ProductCardBrandName = styled.h3`
  @media only screen and (min-width: 1366px) {
    width: 5.6875rem;
    font-size: 0.8125rem;
    line-height: 1.23077;
    margin-top: 0.625rem;
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const ProductCardProductPrice = styled.h3`
  @media only screen and (min-width: 1366px) {
    width: 5.8125rem;
    height: 1;
    font-size: 0.8125rem;
    line-height: 1.23077;
    color: #ffffff;
    margin-top: 0.6875rem;
  }
`;
export const ProductCardSecondSection = styled.div`
  @media only screen and (min-width: 1366px) {
    margin-top: 0.8125rem;
  }
`;
export const ProductCardProductLocationContainer = styled.div`
  @media only screen and (min-width: 1366px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const ProductCardProductLocation = styled.h3`
  @media only screen and (min-width: 1366px) {
    /* width: 5.625rem; */
    height: 0.875rem;
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const ProductCardProductDate = styled.h3`
  @media only screen and (min-width: 1366px) {
    /* width: 5.8125rem; */
    height: 0.875rem;
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 1.19308;
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const ProductCardProductDescription = styled.h3`
  @media only screen and (min-width: 1366px) {
    font-size: 0.6875rem;
    margin-top: 0.875rem;
    line-height: 1.18181;
    color: rgba(255, 255, 255, 0.6);
  }
`;
