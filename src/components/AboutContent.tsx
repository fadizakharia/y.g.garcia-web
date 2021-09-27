import React from "react";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "84px 0",
      height: "100%",
      width: "100%",
    },
    bodyWrapper: {
      textAlign: "center",
      padding: "10px",
      margin: "auto auto",
    },
    bodyHeader: {
      textDecoration: "underline",
      marginBottom: "20px",
    },
    bodyBio: {
      maxWidth: "700px",
      margin: "auto auto",
    },
  })
);
const AboutContent = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.bodyWrapper}>
        <Typography className={styles.bodyHeader} variant="h2">
          About the author:
        </Typography>
        <Typography className={styles.bodyBio} variant="body1">
          Y.G. García is a debut novelist with a passion for languages and pop
          culture. Hailing from the mountains of Puerto Rico, Y.G.’s Island
          fever drove him to learn a total of six languages once he relocated to
          the mainland United States. Y.G. is self-publishing the first
          novelization of the Tokusatsu genre that brought Power Rangers, Kamen
          Rider, Metal Heroes and Ultraman to fans around the world. Y.G. also
          draws inspiration from Korean Dramas, Spanish Telenovelas and Middle
          Easten culture to create a colorful backdrop that is sure to inspire
          and entertain.
        </Typography>
      </div>
    </div>
  );
};

export default AboutContent;
