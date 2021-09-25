import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import React from "react";
import getBookStatus from "../utils/getBookStatus";
interface BookProps {
  book: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardWrapper: {
      textAlign: "center",
      justifyItems: "center",
    },
    root: {
      maxWidth: 1000,
      margin: "0 auto",
      textAlign: "center",
      border: `1px solid ${theme.palette.primary.main}`,
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
  })
);
const Book: React.FC<BookProps> = (props) => {
  const router = useRouter();
  const styles = useStyles();
  return (
    <Grid className={styles.cardWrapper} item xs={12}>
      <Card className={styles.root}>
        <CardMedia
          className={styles.media}
          image={
            props.book.images[0]
              ? props.book.images[0].imageUrl
              : "https://plchldr.co/i/500x250?text=Coming%20Soon"
          }
        />
        <CardHeader title={props.book.title} />

        <Typography variant="caption">
          {getBookStatus(props.book.status)}
        </Typography>
        <CardContent>
          <Typography variant="caption">genres: {props.book.genres}</Typography>
          <Typography variant="body1">
            {props.book.body.substr(0, 500)}...
          </Typography>
        </CardContent>

        <Button
          onClick={() => {
            router.push("/books/" + props.book.id);
          }}
          style={{ margin: "10px 0" }}
          variant="outlined"
        >
          Learn More
        </Button>
      </Card>
    </Grid>
  );
};

export default Book;
