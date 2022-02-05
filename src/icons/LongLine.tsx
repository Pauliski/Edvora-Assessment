import React from "react";
import styled from "styled-components";

const SvgStyle = styled.svg`
  width: 100%;
  @media only screen and (min-width: 1001px) {
    width: 972px;
  }
`;

const LongLine = (): JSX.Element => {
  return (
    <SvgStyle
      // width="972"
      height="2"
      viewBox="0 0 972 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H971"
        stroke="#CBCBCB"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
    </SvgStyle>
  );
};
export default LongLine;
