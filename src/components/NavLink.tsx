import {
  createStyles,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";
interface props {
  variant: "mobile" | "desktop";
  link: string;
  title?: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkDesktop: {
      display: "inline",
      margin: "0 10px",
      cursor: "pointer",
      position: "relative",
      padding: "10px",
      transition: "all 300ms cubic-bezier(0.075, 0.82, 0.165, 1)",
      textTransform: "uppercase",
      "&::before": {
        content: '""',
        position: "absolute",
        display: "block",
        border: "0px solid transparent",
        width: "0%",
        height: "0%",
        transition: "all 0.3s ease",
        borderRadius: "50%",
        bottom: 0,
        right: 0,
        borderRight: "2px solid transparent",
        borderBottom: "2px solid transparent",
      },
      "&::after": {
        borderRadius: "50%",
        content: '""',
        position: "absolute",
        display: "block",
        border: "0px solid transparent",
        width: "0%",
        height: "0%",
        transition: "all 0.3s ease",
        top: 0,
        left: 0,
        borderTop: "2px solid transparent",
        borderLeft: "2px solid transparent",
      },
      "&:hover": {
        "&::after": {
          width: "10px",
          height: "10px",
          borderColor: "#fff",
        },
        "&::before": { width: "10px", height: "10px", borderColor: "#fff" },
      },
    },
    listItem: {
      padding: 0,
    },
    linkMobile: {
      width: "100%",

      padding: "8px 5px",
      minWidth: "250px",
      "&:hover": {
        color: theme.palette.primary.main,
      },
      "&:active": {
        animation: `$shake 0.25s ${theme.transitions.easing.easeInOut}`,
      },
    },
    "@keyframes shake": {
      "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
      "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
      "20%": { transform: "translate(-3px, 0px) rotate(1deg) " },
      "30%": { transform: "translate(3px, 2px) rotate(0deg) " },
      "40%": { transform: "translate(1px, -1px) rotate(1deg) " },
      "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
      "60%": { transform: "translate(-3px, 1px) rotate(0deg) " },
      "70%": { transform: "translate(3px, 1px) rotate(-1deg) " },
      "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
      "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
      "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
    },
  })
);
export default function NavLink(props: props) {
  const styles = useStyles();

  return props.variant === "desktop" ? (
    <Link href={props.link}>
      <Typography className={styles.linkDesktop} variant="subtitle1">
        {!props.title ? props.link.split("/")[1] : props.title}
      </Typography>
    </Link>
  ) : (
    <ListItem button className={styles.listItem}>
      <Link href={props.link}>
        <ListItemText>
          <Typography className={styles.linkMobile} variant="h6">
            {!props.title ? props.link.split("/")[1] : props.title}
          </Typography>
        </ListItemText>
      </Link>
    </ListItem>
  );
}
