import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GroupProduct from "components/GroupProduct/GroupProduct";
import App from "components/App/App";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios.get("https://assessment-edvora.herokuapp.com/");
  // const dataa = await res.json()
  return {
    props: {
      productArr: res.data,
    },
  };
  // const data = await res.json();
};

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

interface productArrProps {
  productArr: productProps[];
}

const Home: NextPage = ({ productArr }: any) => {
  const [filterValue, setFilterValue] = useState({
    product_name: "",
    state: "",
    city: "",
  });
  const allProduct = productArr
  const [displayProduct, setDisplayProduct] = useState(productArr);
  const handleFilter = (filterBy) => {
    setFilterValue((prev) => ({ ...prev, ...filterBy }));
  };
  useEffect(() => {
    setFilterValue(filterValue);
    console.log(filterValue);
    
    if (filterValue.product_name) {
      const productFilter = displayProduct.filter(
        (x) => x.product_name === filterValue.product_name
      );
      setDisplayProduct(productFilter);
    } else if (filterValue.state) {
      const productFilter = displayProduct.filter(
        (x) => x.address.state === filterValue.state
      );
      setDisplayProduct(productFilter);
    } else if (filterValue.city) {
      const productFilter = displayProduct.filter(
        (x) => x.address.city === filterValue.city
      );
      setDisplayProduct(productFilter);
    }
  }, [filterValue]);

  useEffect(() => {
    setDisplayProduct(displayProduct);
    console.log(displayProduct);
  }, [displayProduct]);

  return (
    <div>
      <Head>
        <title>Edvora Assessment</title>
        <meta name="description" content="Created by Paul Arokoola" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <GroupProduct productArr={displayProduct} />
      </div>
    </div>
  );
};

export default Home;
