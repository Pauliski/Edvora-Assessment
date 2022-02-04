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

const product = {
  product_name: "Alphabet inc",
  brand_name: "Alphabet",
  price: 400,
  address: {
    state: "Meghalaya",
    city: "Tura",
  },
  discription: "Its a good product",
  date: "2015-06-30T22:57:35.483Z",
  time: "2021-08-09T14:21:46.524Z",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
};

interface productProps  {
  product_name: string;
  brand_name: string;
  price: number;
  address: {
    state: string;
    city: string;
  };
  discription: string;
  date: string;
  time: string;
  image: string;
};

type ProductCardProps = {
  eachProduct: productProps
}

const ProductCard = ({eachProduct}: ProductCardProps) => {
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
          <ProductCardProductPrice>$ {eachProduct.price}</ProductCardProductPrice>
        </ProductCardNameSection>
      </ProductCardFirstSection>
      <ProductCardSecondSection>
        <ProductCardProductLocationContainer>
          <ProductCardProductLocation>
            {eachProduct.address.state}
          </ProductCardProductLocation>
          <ProductCardProductDate><Moment format="DD:MM:YY">{eachProduct.date}</Moment></ProductCardProductDate>
        </ProductCardProductLocationContainer>

        <ProductCardProductDescription>{eachProduct.discription}</ProductCardProductDescription>
      </ProductCardSecondSection>
    </ProductCardWraapper>
  );
};

export default ProductCard;
