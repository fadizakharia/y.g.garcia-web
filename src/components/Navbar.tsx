import {
  AppBar,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Nav from "./Nav";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
    },
    toolBar: { padding: "0" },
    logoContainer: {
      width: "32vw",
      minWidth: "150px",
      maxWidth: "300px",
      "clip-path": "polygon(0% 0, 100% 0, 75% 50%,100% 100%, 0 100%)",
      backgroundColor: "white",
      textAlign: "center",
    },

    logo: {
      maxHeight: "64px",
      maxWidth: "94px",
      padding: "5px",
      margin: "5px auto 5px auto",
      transform: "translateX(-20%)",
      cursor: "pointer",
    },
  })
);
export default function Navbar() {
  const styles = useStyles();
  return (
    <AppBar className={styles.root}>
      <Toolbar className={styles.toolBar}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <div className={styles.logo}>
              <Image
                width="60px"
                height="60px"
                src="/assets/logo-sm.png"
                alt="y.g.garcia"
              />
            </div>
          </Link>
        </div>
        <Nav />
      </Toolbar>
    </AppBar>
  );
}
