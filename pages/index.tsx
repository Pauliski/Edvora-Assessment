import type { NextPage } from "next";
import Head from "next/head";
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
