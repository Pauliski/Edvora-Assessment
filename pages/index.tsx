import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import CustomSelect from "components/Dropdown/CustomSelect";
import CustomOption from "components/CustomOption/CustomOption";
import FilterWrapper from "components/FilterWrapper/FilterWrapper";
import ProductCard from "components/ProductCard/ProductCard";
import AllProduct from "components/AllProduct/AllProduct";
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
  productArr: productProps[]
}

const Home: NextPage = ({ productArr } ) => {
  return (
    <div>
      <Head>
        <title>Edvora Assessment</title>
        <meta name="description" content="Created by Paul Arokoola" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <GroupProduct productArr={productArr} />
      </div>
    </div>
  );
};

export default Home;
