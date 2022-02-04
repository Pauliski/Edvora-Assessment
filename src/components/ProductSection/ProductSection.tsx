import AllProduct from "components/AllProduct/AllProduct";
import RightArrow from "icons/RightArrow";
import React, {useRef} from "react";
import { ProductSectionCardsAndArrow, ProductSectionWrapper } from "./style";

const ProductSection = ({ ref, data }) => {
  const refElement = useRef(null);
  const scroll = (scrollOffset) => {
    console.log(refElement.current.scrollLeft, scrollOffset);
    refElement.current.scrollLeft += scrollOffset;
  };
  return (
    <ProductSectionCardsAndArrow>
      <ProductSectionWrapper ref={refElement}>
        <AllProduct data={data} />
      </ProductSectionWrapper>
      <button onClick={() => scroll(40)}>
        <RightArrow />
      </button>
    </ProductSectionCardsAndArrow>
  );
};

export default ProductSection;
