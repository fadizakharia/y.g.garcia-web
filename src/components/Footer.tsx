import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "black",
      width: "100%",
      padding: "10px",
      marginBottom: "0",
      marginTop: "auto",
    },
  })
);
export default function Footer() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Typography color="secondary" variant="subtitle2">
        Copyright &copy; 2021 Y.G.Garcia. All Rights Reserved
      </Typography>
    </div>
  );
}
