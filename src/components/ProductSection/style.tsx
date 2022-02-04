import styled from "styled-components";

export const ProductSectionCardsAndArrow = styled.div`
  @media only screen and (min-width: 1366px) {
    display: flex;
   align-items: center;
  }
`;
export const ProductSectionWrapper = styled.div`
  @media only screen and (min-width: 1366px) {
    width: 61.5rem;
    /* height: 11.875rem; */
    height: auto;
    background: #131313;
    border-radius: 0.9375rem;
    color: white;
    display: flex;
    overflow-x: scroll;
    margin-bottom: 2.8125rem;
    margin-right: 2.25rem;
    padding: 1.3126rem 2.75rem 1.1875rem 1.25rem;
    -ms-overflow-style: none;  
  scrollbar-width: none;  
    &::-webkit-scrollbar {
  display: none;
}
   
  }
`;