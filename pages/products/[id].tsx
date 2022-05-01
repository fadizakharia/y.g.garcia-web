import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Client from "../../src/utils/shopify";
import Product from "../../src/components/Product";
import ShopifyNavbar from "../../src/components/ShopifyNavbar";
export const getStaticPaths = async () => {
  const data = await Client.product.fetchAll();

  const paths = data.map((prod) => {
    return {
      params: { id: prod.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const { id } = context.params;

  let data = await Client.product.fetch(id);
  data = JSON.parse(JSON.stringify(data));
  return {
    props: {
      product: data,
    },
  };
};
const index = ({ product }) => {
  const router = useRouter();
  const { search } = router.query;

  <Head>
    <title>Y.G. GARCIA | product</title>
    <meta
      name="description"
      content={
        'View the characters that belong to the book "The jewel of her desires" i recommend you. The cast of the Jewel of Her Desire is broken into four factions where the term Hero and Villain mean nothing. Whoever gets control of all 12 soul Light Jewels can reshape reality. take a look into commander zakharia he\'s awesome'
      }
    />
  </Head>;
  return (
    <React.Fragment>
      <ShopifyNavbar mode="product" />
      <Product product={product} />
    </React.Fragment>
  );
};

export default index;
