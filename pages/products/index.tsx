import React from "react";
import Client from "../../src/utils/shopify";
import Head from "next/head";
import Products from "../../src/components/Products";
import ShopifyNavbar from "../../src/components/ShopifyNavbar";

export async function getServerSideProps({
  query: { page = 1, category, search },
}) {
  let data;
  if (category && search) {
    data = await Client.product.fetchQuery({
      query: `product_type:'${category}' AND title:'${search}'`,
      sortKey: "PRICE",
    });
  } else if (category) {
    data = await Client.product.fetchQuery({
      query: `product_type:'${category}'`,
      sortKey: "PRICE",
    });
  } else if (search) {
    data = await Client.product.fetchQuery({
      query: `title:'${search}'`,
      sortKey: "PRICE",
    });
  } else {
    data = await Client.product.fetchAll();
  }
  data = JSON.parse(JSON.stringify(data));

  return {
    props: {
      products: { data },
      page,
    },
  };
}
const ProductsPage = (props) => {
  <Head>
    <title>Y.G. GARCIA | Products</title>
    <meta
      name="description"
      content="Browse Y.G's books that belong to the following genres and more: Multicultural, Epic Fantasy, Scifi, Tokusatsu...etc. The Tengoku Sentai Series is a set of self-published Urban Fantasy novels for Adults paying homage to the Tokusatsu gennre that brought us Power Rangers and Super Sentai."
    />
  </Head>;

  return (
    <div>
      <ShopifyNavbar mode="products" />
      <Products products={props.products.data} />
    </div>
  );
};

export default ProductsPage;
