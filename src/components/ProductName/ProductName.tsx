import LongLine from "icons/LongLine";
import React from "react";
import {
  ProductNameContainer,
  ProductNameLongLineWrapper,
  ProductNameTitle,
} from "./style";

type ProductNameProps = {
  product: string;
  children: JSX.Element;
};

const ProductName = ({ product, children }: ProductNameProps) => {
  return (
    <>
      <ProductNameContainer>
        <ProductNameTitle>{product}</ProductNameTitle>
        <ProductNameLongLineWrapper>
          <LongLine />
        </ProductNameLongLineWrapper>
      </ProductNameContainer>
      {children}
    </>
  );
};

export default ProductName;
