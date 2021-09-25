import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
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
  const Router = useRouter();
  const styles = useStyles();
  return (
    <div className={styles.HeroWrapper}>
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
              &quot;the jewel of her desire&quot;
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
                onClick={() =>
                  Router.push("https://patreon.com/ygGarciaAuthor")
                }
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

/*
./pages/_app.tsx
[y-g-garcia-web] [2021-09-25 12:43:42] 28:9  Warning: Do not include stylesheets manually. See: https://nextjs.org/docs/messages/no-css-tags.  @next/next/no-css-tags
[y-g-garcia-web] [2021-09-25 12:43:42] 29:9  Warning: Do not include stylesheets manually. See: https://nextjs.org/docs/messages/no-css-tags.  @next/next/no-css-tags
[y-g-garcia-web] [2021-09-25 12:43:42] 
[y-g-garcia-web] [2021-09-25 12:43:42] ./pages/about.tsx
[y-g-garcia-web] [2021-09-25 12:43:42] 25:18  Error: React Hook "useStyles" is called in function "about" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter.  react-hooks/rules-of-hooks
[y-g-garcia-web] [2021-09-25 12:43:42] 
[y-g-garcia-web] [2021-09-25 12:43:42] ./pages/books/[id].tsx
[y-g-garcia-web] [2021-09-25 12:43:42] 84:13  Error: Missing "key" prop for element in iterator  react/jsx-key
[y-g-garcia-web] [2021-09-25 12:43:42] 115:23  Warning: Image elements must have an alt prop, either with meaningful text, or an empty string for decorative images.  jsx-a11y/alt-text
[y-g-garcia-web] [2021-09-25 12:43:42] 
[y-g-garcia-web] [2021-09-25 12:43:42] ./src/components/Books.tsx
[y-g-garcia-web] [2021-09-25 12:43:42] 11:16  Error: Missing "key" prop for element in iterator  react/jsx-key
[y-g-garcia-web] [2021-09-25 12:43:42] 
[y-g-garcia-web] [2021-09-25 12:43:42] ./src/components/Hero.tsx
[y-g-garcia-web] [2021-09-25 12:43:42] 110:20  Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.  react/no-unescaped-entities
[y-g-garcia-web] [2021-09-25 12:43:42] 113:77  Error: `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.  react/no-unescaped-entities
[y-g-garcia-web] [2021-09-25 12:43:42] 114:34  Error: `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.  react/no-unescaped-entities
[y-g-garcia-web] [2021-09-25 12:43:42] 119:19  Warning: Image elements must have an alt prop, either with meaningful text, or an empty string for decorative images.  jsx-a11y/alt-text
[y-g-garcia-web] [2021-09-25 12:43:42] 
[y-g-garcia-web] [2021-09-25 12:43:42] ./src/components/NavLink.tsx
[y-g-garcia-web] [2021-09-25 12:43:42] 97:5  Warning: passHref is missing. See https://nextjs.org/docs/messages/link-passhref  @next/next/link-passhref
[y-g-garcia-web] [2021-09-25 12:43:42] 104:7  Warning: passHref is missing. See https://nextjs.org/docs/messages/link-passhref  @next/next/link-passhref
[y-g-garcia-web] [2021-09-25 12:43:42] 
[y-g-garcia-web] [2021-09-25 12:43:42] ./src/components/Navbar.tsx
[y-g-garcia-web] [2021-09-25 12:43:42] 43:11  Warning: passHref is missing. See https://nextjs.org/docs/messages/link-passhref  @next/next/link-passhref
[y-g-garcia-web] [2021-09-25 12:43:42] 
[y-g-garcia-web] [2021-09-25 12:43:42] ./src/components/PotatoPlaceholder.tsx
[y-g-garcia-web] [2021-09-25 12:43:42] 50:33  Error: `'` can be escaped with `
*/
