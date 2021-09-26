import {
  createStyles,
  Divider,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import SocialMediaIcons from "../src/components/SocialMediaIcons";
import { makeStyles } from "@material-ui/core";
import React from "react";
import Hero from "../src/components/Hero";

import MailChimp from "../src/components/MailChimp";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    HouseLWrapper: {
      backgroundColor: theme.palette.primary.dark,
    },
    HouseL: {
      backgroundColor: "white",
    },

    HousePaper: {
      width: "90vw",
      margin: "50px auto 57px auto",
      padding: "10px",

      boxSizing: "content-box",
      [theme.breakpoints.up("sm")]: {
        width: "50vw",
      },
    },
    HousePaperTextField: {
      padding: "10px 0 0 0",
      width: "50%",
      margin: "0 auto",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    HousePaperButton: {
      textAlign: "center",
      padding: "15px 0",
    },
  })
);
export default function Index() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Hero />

      <Paper
        className={styles.HousePaper}
        elevation={3}
        variant="elevation"
        square
      >
        <Typography align="center" variant="body1">
          Stay up to date on the novel by following us on social media:
        </Typography>
        <SocialMediaIcons />
        <Divider style={{ margin: "20px 0" }} />
        <MailChimp />
      </Paper>
    </div>
  );
}
