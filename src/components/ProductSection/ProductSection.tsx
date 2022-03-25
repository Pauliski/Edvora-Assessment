import AllProduct from "components/AllProduct/AllProduct";
import RightArrow from "icons/RightArrow";
import React, { RefObject, useRef } from "react";
import {
  ProductSectionButton,
  ProductSectionCardsAndArrow,
  ProductSectionPaddingElement,
  ProductSectionWrapper,
} from "./style";

interface productProps {
  product_name: string;
  brand_name: string;
  price: number;
  state: string;
  city: string;
  discription: string;
  date: string;
  time: string;
  image: string;
}

type ProductSectionProps = {
  data: productProps[];
};

const ProductSection = ({ data }: ProductSectionProps) => {
  const refElement: RefObject<any> = useRef(null);
  const scroll = (scrollOffset: number) => {
    refElement.current.scrollLeft += scrollOffset;
  };
  return (
    <ProductSectionCardsAndArrow>
      <ProductSectionWrapper ref={refElement}>
        <AllProduct data={data} />
        <ProductSectionPaddingElement></ProductSectionPaddingElement>
      </ProductSectionWrapper>
      <ProductSectionButton onClick={() => scroll(40)}>
        <RightArrow />
      </ProductSectionButton>
    </ProductSectionCardsAndArrow>
  );
};

export default ProductSection;
