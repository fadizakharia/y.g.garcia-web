import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Hero: {
      marginTop: "74px",
      height: "100%",
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

        borderBottom: `5px solid ${theme.palette.primary.main}`,
      },
      margin: "30px auto",
    },
    heroImage: {
      overflow: "hidden",
      boxSizing: "content-box",
    },
    heroBackgroundOverlay: {
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: "100%",
      transform: "translate(-50%,-50%)",
    },
    patreonCTA: {
      backgroundColor: "#F3AA0D",
    },
    patreonCTAContainer: {
      width: "100%",
      textAlign: "center",
      marginTop: "2rem",
    },
  })
);
export default function Hero() {
  const Router = useRouter();
  const styles = useStyles();
  return (
    <div className={styles.Hero}>
      <Grid container>
        <Grid item xs={12}>
          <div className={styles.heroImageContainer}>
            <div className={styles.heroImage}>
              <Image
                width="270px"
                height="290px"
                src="/assets/evil-sm.png"
                alt="Lord banrek"
              />
            </div>
          </div>
          <Typography
            className={styles.title}
            align="center"
            color="secondary"
            variant="h3"
          >
            Hi, I&apos;m Y.G Garcia
          </Typography>
          <Typography align="center" color="secondary" variant="body1">
            I am the debut author behind the upcoming scifi/fantasy novel
            &quot;The Jewel of Her Desire&quot;
          </Typography>
          <div className={styles.patreonCTAContainer}>
            <Button
              startIcon={
                <Image
                  width="20px"
                  height="20px"
                  alt="Patreon Logo"
                  src="/assets/Digital-Patreon-Logo_Black.png"
                />
              }
              className={styles.patreonCTA}
              variant="contained"
              onClick={() => Router.push("https://patreon.com/ygGarciaAuthor")}
            >
              Support my patreon?
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
