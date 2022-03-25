import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GroupProduct from "components/GroupProduct/GroupProduct";
import axios from "axios";

export const getServerSideProps = async () => {
  const res = await axios.get("https://assessment-edvora.herokuapp.com/");
  return {
    props: {
      productArr: res.data,
    },
  };
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
  const [displayProduct, setDisplayProduct] = useState(productArr);

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
