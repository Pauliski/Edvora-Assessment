import React from "react";
import Moment from "react-moment";
import {
  ProductCardBrandName,
  ProductCardFirstSection,
  ProductCardImage,
  ProductCardImageContainer,
  ProductCardNameSection,
  ProductCardProductDate,
  ProductCardProductDescription,
  ProductCardProductLocation,
  ProductCardProductLocationContainer,
  ProductCardProductName,
  ProductCardProductPrice,
  ProductCardSecondSection,
  ProductCardWraapper,
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

type ProductCardProps = {
  eachProduct: productProps;
};

const ProductCard = ({ eachProduct }: ProductCardProps) => {
  return (
    <ProductCardWraapper>
      <ProductCardFirstSection>
        <ProductCardImageContainer>
          <ProductCardImage src={eachProduct.image} />
        </ProductCardImageContainer>
        <ProductCardNameSection>
          <ProductCardProductName>
            {eachProduct.product_name}
          </ProductCardProductName>
          <ProductCardBrandName>{eachProduct.brand_name}</ProductCardBrandName>
          <ProductCardProductPrice>
            $ {eachProduct.price}
          </ProductCardProductPrice>
        </ProductCardNameSection>
      </ProductCardFirstSection>
      <ProductCardSecondSection>
        <ProductCardProductLocationContainer>
          <ProductCardProductLocation>
            {eachProduct.city}, {eachProduct.state}
          </ProductCardProductLocation>
          <ProductCardProductDate>
            <Moment format="DD:MM:YYYY">{eachProduct.date}</Moment>
          </ProductCardProductDate>
        </ProductCardProductLocationContainer>
        <ProductCardProductDescription>
          {eachProduct.discription}
        </ProductCardProductDescription>
      </ProductCardSecondSection>
    </ProductCardWraapper>
  );
};

export default ProductCard;
