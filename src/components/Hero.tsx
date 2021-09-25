import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    HeroWrapper: {
      backgroundColor: "white",
      borderBottom: "rgba(255, 255, 255, 0.05) 2px solid",
      position: "relative",
      zIndex: 0,
    },
    Hero: {
      marginTop: "74px",
      height: "80vh",
      maxHeight: "100vh",
      background:
        "radial-gradient(circle, rgba(57,134,71,1) 5%, rgba(34,48,51,1) 45%, rgba(34,64,51,1) 100%)",
      [theme.breakpoints.down("md")]: {
        background:
          "radial-gradient(circle, rgba(57,134,71,1) 5%, rgba(34,48,51,1) 55%, rgba(34,64,51,1) 100%)",
      },
      [theme.breakpoints.down("sm")]: {
        background:
          "radial-gradient(circle, rgba(57,134,71,1) 5%, rgba(34,48,51,1) 72%, rgba(34,64,51,1) 100%)",
      },
      display: "flex",
      padding: "20px",
      position: "relative",
    },
    title: {
      marginBottom: "5px",
    },
    heroImageContainer: {
      maxWidth: "270px",
      maxHeight: "290px",
      overflow: "hidden",
      position: "relative",
      "&::after": {
        content: '""',
        display: "block",
        position: "absolute",
        minWidth: "270px",
        bottom: "0",
        boxShadow: '"0px -101px 44px -4px rgba(0,0,0,0.69)"',
        borderBottom: `5px solid ${theme.palette.primary.dark}`,
      },
      margin: "5vh auto 30px auto",
    },
    heroImage: {
      width: "270px",
      height: "290px",

      overflow: "hidden",
      boxSizing: "content-box",
    },
    heroBackgroundOverlay: {
      position: "absolute",
      zIndex: -1,
      width: "90vh",
      height: "calc(100vh - 74px)",
      top: "85%",
      transform: "translate(-52%,-50%)",
      left: "51%",
      [theme.breakpoints.down("sm")]: {
        top: "92%",
        width: "80vh",
        height: "90vh",
      },
    },
    patreonCTA: {
      backgroundColor: "#F3AA0D",
    },
    patreonCTAContainer: {
      width: "100%",
      textAlign: "center",

      marginTop: "7vh",
    },
  })
);
export default function Hero() {
  const styles = useStyles();
  return (
    <div className={styles.HeroWrapper}>
      <div className={styles.Hero}>
        {/* <img
          className={styles.heroBackgroundOverlay}
          src="./assets/evil-lg.png"
        /> */}
        <Grid container>
          <Grid item xs={12}>
            <div className={styles.heroImageContainer}>
              <img
                className={styles.heroImage}
                src="./assets/evil-sm.png"
                alt="Y.G garcia's face"
              />
            </div>
            <Typography
              className={styles.title}
              align="center"
              color="secondary"
              variant="h3"
            >
              Hi, I'm Y.G Garcia
            </Typography>
            <Typography align="center" color="secondary" variant="body1">
              I am the debut author behind the upcoming scifi/fantasy novel "the
              jewel of her desire"
            </Typography>
            <div className={styles.patreonCTAContainer}>
              <Button
                startIcon={
                  <img
                    width="20px"
                    height="20px"
                    src="./assets/Digital-Patreon-Logo_Black.png"
                  />
                }
                className={styles.patreonCTA}
                variant="contained"
              >
                Support my patreon?
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
