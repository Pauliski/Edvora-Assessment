import ProductCard from "components/ProductCard/ProductCard";
import React from "react";

interface productProps {
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
}

type ProductProps = {
  data: productProps[];
};

const AllProduct = ({ data }: ProductProps) => {
  return (
    <>
      {data.map((product) => (
        <ProductCard eachProduct={product} />
      ))}
    </>
  );
};

export default AllProduct;
