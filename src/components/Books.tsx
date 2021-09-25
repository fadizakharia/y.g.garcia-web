import { Grid } from "@material-ui/core";
import React from "react";
import Book from "./Book";
interface BooksProps {
  books: any;
}
const Books = (props: BooksProps) => {
  return (
    <Grid style={{ padding: "10px", marginTop: "80px" }} container spacing={4}>
      {props.books.map((book: any) => {
        return <Book book={book} />;
      })}
    </Grid>
  );
};

export default Books;
