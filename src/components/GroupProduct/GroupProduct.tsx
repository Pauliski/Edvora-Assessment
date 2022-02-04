import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import AllProduct from "components/AllProduct/AllProduct";
import { GroupProductCardsAndArrow, GroupProductWrapper } from "./style";
import ProductName from "components/ProductName/ProductName";
import CompanyName from "components/CompanyName/CompanyName";
import RightArrow from "icons/RightArrow";
import ProductSection from "components/ProductSection/ProductSection";

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

const GroupProduct = () => {
  const [products, setProducts] = useState([]);
  const refElement = useRef(null);
  const [unique, setUnique] = useState([]);
  const [productArr, setProductArr] = useState([]);
  let allArray = [];


  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const res = await axios.get("https://assessment-edvora.herokuapp.com/");
        if (res.status === 200) {
          setProducts(res.data);
          const uniqueItem = Array.from(
            new Set(res.data.map((item: productProps) => item.product_name))
          );
          setUnique(uniqueItem);
          allArray = uniqueItem.map((item) =>
            res.data.filter((product) => item === product.product_name)
          );
          console.log(allArray);
          const awesome = allArray.map((eachArray) => eachArray);
          setProductArr(awesome);
        }
      } catch (error) {}
    };
    getAllProduct();
  }, []);

  return (
    <div>
      <CompanyName />
      {productArr.map((eachArray, i) => (
        <ProductName key={i} product={`${eachArray[i].product_name}`}>
          <ProductSection ref={refElement} data={eachArray}/>
        </ProductName>
      ))}
    </div>
  );
};

export default GroupProduct;
