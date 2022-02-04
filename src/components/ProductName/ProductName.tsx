import LongLine from "icons/LongLine";
import React from "react";
import { ProductNameContainer, ProductNameTitle } from "./style";

type ProductNameProps = {
  product: string;
  children: JSX.Element;
};

const ProductName = ({ product, children }: ProductNameProps) => {
  return (
    <>
    <ProductNameContainer>
      <ProductNameTitle>{product}</ProductNameTitle>
      <LongLine />
    </ProductNameContainer>
      {children}
    </>
  );
};

export default ProductName;
