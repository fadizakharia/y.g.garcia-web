import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Image from "next/image";
import React from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bubble: {
      position: "relative",
      fontFamily: "Roboto",
      fontSize: "18px",
      lineHeight: "24px",
      margin: "100px auto 0 auto",
      width: "300px",
      background: theme.palette.primary.main,
      borderRadius: "40px",
      transform: "translate(50%)",
      [theme.breakpoints.down("xs")]: {
        transform: "translate(0)",
      },
      padding: "24px",
      textAlign: "center",
      color: "#fff",
      "&::after": {
        content: '""',
        width: "0px",
        height: "0px",
        position: "absolute",
        borderLeft: `24px solid ${theme.palette.primary.main}`,
        borderRight: "12px solid transparent",
        borderTop: `12px solid ${theme.palette.primary.main}`,
        borderBottom: "20px solid transparent",
        [theme.breakpoints.down("xs")]: {
          right: "32px",
          left: "auto",
        },
        left: "32px",
        bottom: "-24px",
      },
    },
    imageWrapper: {
      textAlign: "center",
      position: "relative",
    },
  })
);
const PotatoPlaceholder = () => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.bubble}>
        These **** Potatos haven&apos;t implemented this page yet!? <br />{" "}
        *puffs on cigarette* <br /> Someone get me a bourbon before i kill
        someone.
      </div>
      <div className={styles.imageWrapper}>
        <Image
          width="400px"
          height="500px"
          alt="angry commander"
          src="/assets/commander-zakharia-sm.png"
        />
      </div>
    </div>
  );
};

export default PotatoPlaceholder;
