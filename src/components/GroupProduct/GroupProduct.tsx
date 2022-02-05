import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ProductName from "components/ProductName/ProductName";
import CompanyName from "components/CompanyName/CompanyName";
import ProductSection from "components/ProductSection/ProductSection";
import {
  GroupProductCompanyName,
  GroupProductContainer,
  GroupProductFallbackText,
  GroupProductWrapper,
} from "./style";
import FilterWrapper from "components/FilterWrapper/FilterWrapper";

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
  const [stateArray, setStateArray] = useState([]);
  const [cityeArray, setCityArray] = useState([]);
  const [productArr, setProductArr] = useState([]);
  let allCompanyArray = [];

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const res = await axios.get("https://assessment-edvora.herokuapp.com/");
        if (res.status === 200) {
          const allCompanyNames: any = Array.from(
            new Set(res.data.map((item: productProps) => item.product_name))
          );
          setProducts(allCompanyNames);
          allCompanyArray = allCompanyNames.map((item: string[]) =>
            res.data.filter((product: any) => item === product.product_name)
          );
          setProductArr(allCompanyArray);
          const allProductState: any = Array.from(
            new Set(res.data.map((item: productProps) => item.address.state))
          );
          setStateArray(allProductState);
          const allProductCity: any = Array.from(
            new Set(res.data.map((item: productProps) => item.address.city))
          );
          setCityArray(allProductCity);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllProduct();
  }, []);

  return (
    <GroupProductContainer>
      <FilterWrapper
        states={stateArray}
        products={products}
        city={cityeArray}
      />
      <GroupProductWrapper>
        <GroupProductCompanyName>
          <CompanyName />
        </GroupProductCompanyName>

        {productArr.length !== 0 ? (
          <>
            {productArr.map((eachArray: productProps[], i) => (
              <ProductName
                key={i}
                product={`${
                  eachArray ? eachArray[i].product_name : "Product name"
                }`}
              >
                <ProductSection data={eachArray} />
              </ProductName>
            ))}
          </>
        ) : (
          <GroupProductFallbackText>
            No Product Availabe at the Moment
          </GroupProductFallbackText>
        )}
      </GroupProductWrapper>
    </GroupProductContainer>
  );
};

export default GroupProduct;
