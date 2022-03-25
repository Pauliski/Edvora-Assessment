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

type ProductsProps = {
  product_name: string;
  brand_name: string;
  price: number;
  discription: string;
  date: string;
  time: string;
  image: string;
  address: {
    state: string;
    city: string;
  };
};
type ProductDetailsProps ={
  productDetails: any;
  product_name: any
}

const GroupProduct = ({ productArr }: any) => {
  const [products, setProducts] = useState([]);
  const [stateArray, setStateArray] = useState([]);
  const [cityeArray, setCityArray] = useState([]);
  const [sortedProduct, setSortedProduct]: any[] = useState([]);
  const [productArray, setProductArray] = useState(productArr);
  let allCompanyArray = [];
  const [filterValue, setFilterValue] = useState({
    product_name: "",
    state: "",
    city: "",
  });
  const [displayProduct, setDisplayProduct] = useState(productArr);
  const handleFilter = (filterBy: any) => {
    setFilterValue((prev) => ({ ...prev, ...filterBy }));
  };

  useEffect(() => {
    setFilterValue(filterValue);

    if (filterValue.product_name) {
      const productFilter = productArray.filter(
        (x: any) => x.product_name === filterValue.product_name
      );
      setProductArray(productFilter);
    }
    if (filterValue.state) {
      const productFilter = productArray.filter(
        (x: any) => x.address.state === filterValue.state
      );
      setProductArray(productFilter);
    }
    if (filterValue.city) {
      const productFilter = productArray.filter(
        (x: any) => x.address.city === filterValue.city
      );
      setProductArray(productFilter);
    }
  }, [filterValue]);

  useEffect(() => {
    const productNameArray = productArray.reduce(
      (
        a: any,
        {
          product_name,
          brand_name,
          price,
          discription,
          date,
          time,
          image,
          address: { state },
          address: { city },
        }: ProductsProps
      ) => {
        const obj = a.get(product_name) || { product_name, productDetails: [] };
        obj.productDetails.push({
          product_name,
          brand_name,
          price,
          discription,
          date,
          time,
          image,
          state,
          city,
        });
        return a.set(product_name, obj);
      },
      new Map()
    );
    setSortedProduct([...productNameArray.values()]);
    const allProductState: any = Array.from(
      new Set(productArray.map((item: productProps) => item.address.state))
    );
    setStateArray(allProductState);
    const allProductCity: any = Array.from(
      new Set(productArray.map((item: productProps) => item.address.city))
    );
    setCityArray(allProductCity);
  }, [productArray]);

  useEffect(() => {
    setProductArray(productArr);

    const getAllProduct = async () => {
      try {
        const allCompanyNames: any = Array.from(
          new Set(productArray.map((item: productProps) => item.product_name))
        );
        setProducts(allCompanyNames);

        const allProductState: any = Array.from(
          new Set(productArray.map((item: productProps) => item.address.state))
        );
        setStateArray(allProductState);
        const allProductCity: any = Array.from(
          new Set(productArray.map((item: productProps) => item.address.city))
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
          handleFilter={handleFilter}
        />
        <GroupProductWrapper>
          <GroupProductCompanyName>
            <CompanyName />
          </GroupProductCompanyName>

          {sortedProduct.length !== 0 ? (
            <>
              {sortedProduct.map(
                ({ productDetails, product_name }: ProductDetailsProps, i: any) => {
                  return (
                    <ProductName key={i} product={product_name}>
                      <ProductSection data={productDetails} />
                    </ProductName>
                  );
                }
              )}
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
