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

const MyDiv = styled.div`
  color: #381E23;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 50px;
`;

const arr = ['Adebola', 'Peter']

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Edvora Assessment</title>
        <meta name="description" content="Created by Paul Arokoola" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
      
      
    </div>
  );
};

export default Home;
