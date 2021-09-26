import { Typography } from "@material-ui/core";
import React from "react";
import { getBooks } from "../api/gql/queries";
import Books from "../../src/components/Books";
import client from "../../src/utils/apollo";
import Head from "next/head";
export const getStaticProps = async () => {
  const { data } = await client.query({ query: getBooks });
  return {
    props: {
      books: data.getBooks.Books,
    },
  };
};
const index = (props) => {
  return (
    <div>
      <Head>
        <title>Y.G. GARCIA | Books</title>
        <meta
          name="description"
          content="Browse Y.G's books that belong to the following genres and more: Multicultural, Epic Fantasy, Scifi, Tokusatsu...etc. The Tengoku Sentai Series is a set of self-published Urban Fantasy novels for Adults paying homage to the Tokusatsu gennre that brought us Power Rangers and Super Sentai."
        />
      </Head>
      ;
      <Books books={props.books} />
    </div>
  );
};

export default index;
