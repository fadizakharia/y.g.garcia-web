import React from "react";
import client from "../../src/utils/apollo";
import { getBookQuery, getBooks } from "../api/gql/queries";
import "react-slideshow-image/dist/styles.css";
import SlideShow from "../../src/components/SlideShow";
import { Box, Chip, Divider, Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
export const getStaticPaths = async () => {
  const { data } = await client.query({ query: getBooks });
  const books = data.getBooks.Books;
  const paths = books.map((book) => {
    return {
      params: { id: book.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { data } = await client.query({
    query: getBookQuery,
    variables: { bookId: id },
  });
  return {
    props: {
      book: data.getBook.Book,
    },
  };
};

const Book = ({ book }) => {
  return (
    <div style={{ margin: "64px 0 60px 0" }}>
      <Head>
        <title>Y.G. GARCIA | {book.title}</title>
        <meta name="description" content={book.body.substr(0, 150) + "..."} />
      </Head>
      <SlideShow images={book.images} />
      <Typography
        color="primary"
        style={{ marginTop: "50px" }}
        align="center"
        variant="h2"
      >
        {book.title}
      </Typography>
      <Typography align="center" variant="h6">
        {book.subtitle}
      </Typography>
      <Box
        style={{
          margin: "20px auto 40px auto",
          maxWidth: "300px",
        }}
      >
        <Grid container spacing={1}>
          {book.genres &&
            book.genres.includes(",") &&
            book.genres.split(",").map((genre) => {
              return (
                <Grid key={genre} item xs={"auto"}>
                  <Chip color="primary" label={genre} size="small" />
                </Grid>
              );
            })}
        </Grid>
      </Box>
      <Divider
        style={{
          width: "100px",
          height: "2px",
          backgroundColor: "#00000034",

          margin: "10px auto 20px auto",
        }}
        variant="middle"
      />

      <Typography
        color="primary"
        style={{ margin: "30px 0 20px 0" }}
        align="center"
        variant="h4"
      >
        {book.header}
      </Typography>

      <Typography
        align="center"
        style={{ maxWidth: "500px", margin: "0 auto" }}
        variant="body1"
      >
        {book.body}
      </Typography>
      <Divider
        style={{
          width: "100px",
          height: "2px",
          backgroundColor: "#00000034",

          margin: "40px auto 0 auto",
        }}
        variant="middle"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {book.status !== 0 ? (
          book.purchase_options && book.purchase_options.length > 0 ? (
            book.purchase_options.map((option) => {
              return (
                <div key={option.url} style={{ margin: "10px" }}>
                  <a href={option.url}>
                    <div style={{ borderRadius: "16px" }}>
                      <Image
                        alt={option.url}
                        width="50px"
                        height="50px"
                        src={option.iconUrl}
                      />
                    </div>
                  </a>
                </div>
              );
            })
          ) : (
            <Typography color="error" align="center">
              Book is Not available for purchase at the time.
            </Typography>
          )
        ) : (
          <Typography
            style={{ margin: "40px 0" }}
            variant="body2"
            align="center"
          >
            Coming Soon
          </Typography>
        )}
      </div>
      <Typography
        style={{
          margin: "0 auto 10px auto",
          maxWidth: "400px",
          padding: "5px",
          boxSizing: "border-box",
          border: "2px solid red",
          borderRadius: "5px",
        }}
        variant="body2"
        color="error"
      >
        Caution: {book.warning_message}
      </Typography>
    </div>
  );
};

export default Book;
