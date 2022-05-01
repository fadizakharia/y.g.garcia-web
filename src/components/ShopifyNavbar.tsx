import {
  AppBar,
  Box,
  createStyles,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Client from "../utils/shopify";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Search } from "@material-ui/icons";
import Cart from "./Cart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
      marginTop: "74px",
    },
    toolBar: { padding: "0" },
    filterContainer: {
      backgroundColor: "white",

      margin: "0 auto",
      border: `1px ${theme.palette.secondary.dark} solid`,
      borderRadius: "15px",
      display: "flex",
      justifyContent: "space-around",
    },
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
    categorySelect: {},
    searchBox: {},
    searchButtonWrapper: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);
interface IShopifyNavbar {
  mode: "products" | "product";
}
const ShopifyNavbar: React.FC<IShopifyNavbar> = ({ mode }) => {
  const router = useRouter();

  const [collectionArr, setCollectionArr] = useState<Array<any> | undefined>();
  const [currentCollection, setCurrentCollection] = useState<string>("All");
  const [ftsFilter, setFtsFilter] = useState<string>("");
  useEffect(() => {
    const getShopifyCollections = async () => {
      setCollectionArr(await Client.collection.fetchAll());
    };
    getShopifyCollections();
    return () => {};
  }, []);
  const handleCollectionChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode
  ) => {
    setCurrentCollection(event.target.value as string);
  };

  const handleNavigate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let location = "/";

    if (currentCollection && currentCollection !== "All" && ftsFilter) {
      location = location.concat(
        "?category=" + currentCollection + "&search=" + ftsFilter
      );
    } else if (currentCollection && currentCollection !== "All") {
      location = location.concat("?category=" + currentCollection);
    } else if (ftsFilter) {
      location = location.concat("?search=" + ftsFilter);
    }

    router.push(`/products${location}`);
  };
  const styles = useStyles();
  return (
    <AppBar className={styles.root}>
      <Toolbar className={styles.toolBar}>
        {mode === "products" && (
          <Box className={styles.filterContainer}>
            <FormControl variant="filled" className={styles.categorySelect}>
              <Select
                id="categories-select"
                value={currentCollection}
                onChange={handleCollectionChange}
                placeholder={currentCollection}
                variant="outlined"
              >
                <MenuItem value={"All"} title={"All"}>
                  All
                </MenuItem>
                {collectionArr &&
                  collectionArr.length > 0 &&
                  collectionArr.map((item) => {
                    return (
                      <MenuItem
                        color="primary"
                        value={item.title}
                        title={item.title}
                        key={item.id}
                      >
                        {item.title}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
            <FormControl className={styles.searchBox}>
              <TextField
                value={ftsFilter}
                onChange={(ev) => setFtsFilter(ev.currentTarget.value)}
                variant="outlined"
                placeholder="search..."
              />
            </FormControl>
            <FormControl className={styles.searchButtonWrapper}>
              <IconButton onClick={handleNavigate} color="primary">
                <Search />
              </IconButton>
            </FormControl>
          </Box>
        )}
        <Box margin={"0 30px 0 auto"}>
          <Cart />
        </Box>
        {/* <Link href={""}></Link> */}
      </Toolbar>
    </AppBar>
  );
};
export default ShopifyNavbar;
