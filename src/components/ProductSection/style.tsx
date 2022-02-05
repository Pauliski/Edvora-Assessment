import styled from "styled-components";

export const ProductSectionCardsAndArrow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 1001px) {
    flex-direction: row;
  }
`;
export const ProductSectionWrapper = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  background: #131313;
  border-radius: 0.9375rem;
  color: white;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  margin-bottom: 2.8125rem;
  padding: 2.349% 3.5794%;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (min-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    padding: 2.349% calc(3.5794% - 2.2371%) 3.5794% 2.349%;
  }

  @media only screen and (min-width: 1001px) {
    width: 61.5rem;
    min-height: 11.875rem;
    flex-wrap: nowrap;
    flex-direction: row;
    overflow-x: scroll;
    margin-right: 2.25rem;
    padding: 1.3126rem 0 1.1875rem 1.25rem;
  }
`;
export const ProductSectionButton = styled.div`
  display: none;
  @media only screen and (min-width: 1001px) {
    display: block;
    background-color: transparent;
  }
`;
export const ProductSectionPaddingElement = styled.div`
  display: none;
  @media only screen and (min-width: 1001px) {
    display: block;
    position: sticky;
    background-color: #131313;
    width: 2.75rem;
    right: 0;
    padding-left: 2.5rem;
  }
`;
