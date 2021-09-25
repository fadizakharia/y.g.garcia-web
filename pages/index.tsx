import {
  Box,
  createStyles,
  Divider,
  Grid,
  IconButton,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
// import { Head, Main } from "next/document";
import { makeStyles } from "@material-ui/core";
import React from "react";
import Hero from "../src/components/Hero";
import { Facebook, Instagram, YouTube } from "@material-ui/icons";
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
          in order to be up to date with the latest news concerning the novel
          you can follow us on:
        </Typography>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={2}>
            <Box textAlign="center">
              <IconButton>
                <Facebook />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box textAlign="center">
              <IconButton>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box textAlign="center">
              <IconButton>
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Divider style={{ margin: "20px 0" }} />
        <MailChimp />
      </Paper>
    </div>
  );
}
