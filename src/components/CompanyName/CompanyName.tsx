import React from "react";
import {
  CompanyNameProduct,
  CompanyNameTitle,
  CompanyNameWrapper,
} from "./style";

const CompanyName = () => {
  return (
    <CompanyNameWrapper>
      <CompanyNameTitle>Edvora</CompanyNameTitle>
      <CompanyNameProduct>Products</CompanyNameProduct>
    </CompanyNameWrapper>
  );
};

export default CompanyName;
