import ProductCard from "components/ProductCard/ProductCard";
import React, {useEffect, useState} from "react";

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
  const [returnData, setReturnData] = useState(data)
  useEffect(()=>{
setReturnData(returnData)
  }, returnData)
  return (
    <>
      {data.map((product, i) => (
        <ProductCard eachProduct={product} key={i}/>
      ))}
    </>
  );
};

export default AllProduct;
