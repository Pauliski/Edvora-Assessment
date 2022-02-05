import styled from "styled-components";

export const ProductCardWraapper = styled.div`
  width: 100%;
  min-height: 9.375rem;
  background-color: #232323;
  border-radius: 0.292984rem;
  margin-bottom: 20px;
  padding: 0.625rem 0.8125rem 0.875rem 0.75rem;
  @media only screen and (min-width: 650px) {
    width: 47%;
    margin-right: 2.2371%;
    /* display: flex; */
  }
  @media only screen and (min-width: 1001px) {
    min-width: 13.125rem;
    margin-right: 20px;
    margin-bottom: 0;
    /* min-height: 9.375rem; */
    /* background-color: #232323; */
    /* border-radius: 0.292984rem; */

    /* padding: 0.625rem 0.8125rem 0.875rem 0.75rem; */
  }
`;

export const ProductCardFirstSection = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 1001px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const ProductCardImageContainer = styled.div`
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 0.3125rem;
`;
export const ProductCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const ProductCardNameSection = styled.div`
  margin-left: 9.5238%;
  @media only screen and (min-width: 1001px) {
    margin-left: 1.25rem;
  }
`;
export const ProductCardProductName = styled.h3`
  @media only screen and (min-width: 1001px) {
    font-size: 0.9375rem;
    line-height: 1.2;
    color: #ffffff;
  }
`;
export const ProductCardBrandName = styled.h3`
  font-size: 0.8125rem;
  line-height: 1.23077;
  margin-top: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
`;
export const ProductCardProductPrice = styled.h3`
  font-size: 0.8125rem;
  line-height: 1.23077;
  color: #ffffff;
  margin-top: 0.6875rem;
`;
export const ProductCardSecondSection = styled.div`
  margin-top: 0.8125rem;
`;
export const ProductCardProductLocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProductCardProductLocation = styled.h3`
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.6);
`;
export const ProductCardProductDate = styled.h3`
  height: 0.875rem;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.19308;
  color: rgba(255, 255, 255, 0.6);
`;
export const ProductCardProductDescription = styled.h3`
  font-size: 0.6875rem;
  margin-top: 0.875rem;
  line-height: 1.18181;
  color: rgba(255, 255, 255, 0.6);
`;
