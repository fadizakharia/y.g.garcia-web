import React, { useState } from "react";
import Link from "next/link";
import {
  createStyles,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

import { Menu as Hamburger } from "@material-ui/icons";
import { links } from "../utils/links";
import NavLink from "./NavLink";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    mobileContainer: {
      width: "100%",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    hamburger: {
      display: "block",
      marginLeft: "auto",
      color: "white",
    },
    flex: {
      flex: 1,
      flexGrow: 1,
    },
    toolbar: { ...theme.mixins.toolbar, height: "75px" },
  })
);
export default function Nav() {
  const styles = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <React.Fragment>
      <div className={styles.desktopContainer}>
        {links.map((str) => {
          return <NavLink key={str} variant="desktop" link={"/" + str} />;
        })}
        <NavLink
          key={"merch" + "d"}
          variant="desktop"
          link={"https://www.customink.com/fundraising/yggarciaauthor"}
          title="Merch"
        />
      </div>
      <div className={styles.mobileContainer}>
        <div className={styles.flex}></div>
        <IconButton
          onClick={(e) => {
            setOpen((prev) => {
              return !prev;
            });
          }}
          className={styles.hamburger}
        >
          <Hamburger />
        </IconButton>
        <Drawer
          anchor="left"
          open={open}
          onClose={(e) => {
            setOpen(false);
          }}
        >
          <div className={styles.toolbar} />
          <Divider />
          <List>
            {links.map((str) => {
              return (
                <NavLink key={str + "m"} variant="mobile" link={"/" + str} />
              );
            })}
            <NavLink
              key={"merch" + "m"}
              variant="mobile"
              link={"https://www.customink.com/fundraising/yggarciaauthor"}
              title="Merch"
            />
          </List>
        </Drawer>
      </div>
    </React.Fragment>
  );
}
