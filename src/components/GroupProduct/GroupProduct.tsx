import React, { useEffect, useState } from "react";
import ProductName from "components/ProductName/ProductName";
import CompanyName from "components/CompanyName/CompanyName";
import ProductSection from "components/ProductSection/ProductSection";
import {
  AppWrapper,
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

const GroupProduct = ({ productArr }: any) => {
  const [products, setProducts] = useState([]);
  const [stateArray, setStateArray] = useState([]);
  const [cityeArray, setCityArray] = useState([]);
  const [sortedProduct, setSortedProduct] = useState([]);
  let allCompanyArray = [];

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const allCompanyNames: any = Array.from(
          new Set(productArr.map((item: productProps) => item.product_name))
        );
        setProducts(allCompanyNames);
        allCompanyArray = allCompanyNames.map((item: string[]) =>
          productArr.filter((product: any) => item === product.product_name)
        );
        setSortedProduct(allCompanyArray);
        const allProductState: any = Array.from(
          new Set(productArr.map((item: productProps) => item.address.state))
        );
        setStateArray(allProductState);
        const allProductCity: any = Array.from(
          new Set(productArr.map((item: productProps) => item.address.city))
        );
        setCityArray(allProductCity);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProduct();
  }, []);

  return (
    <AppWrapper>
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

          {sortedProduct.length !== 0 ? (
            <>
              {sortedProduct.map((eachArray: productProps[], i) => {
                return (
                  <ProductName
                    key={i}
                    product={`${
                      eachArray ? eachArray[0].product_name : "Product name"
                    }`}
                  >
                    <ProductSection data={eachArray} />
                  </ProductName>
                );
              })}
            </>
          ) : (
            <GroupProductFallbackText>
              No Product Availabe at the Moment
            </GroupProductFallbackText>
          )}
        </GroupProductWrapper>
      </GroupProductContainer>
    </AppWrapper>
  );
};

export default GroupProduct;
