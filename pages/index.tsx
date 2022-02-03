import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const MyDiv = styled.div`
  color: #381E23;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 50px;
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edvora Assessment</title>
        <meta name="description" content="Created by Paul Arokoola" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyDiv>Hello World</MyDiv>
    </div>
  );
};

export default Home;
