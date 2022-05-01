import {
  Box,
  Button,
  Container,
  createStyles,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import Slideshow from "../components/SlideShow";
import React, { useState } from "react";
import ShopifyNavbar from "./ShopifyNavbar";
import Client from "../utils/shopify";
import { useShopifyProvider } from "../utils/ShopifyCartContext";
import { ShoppingBasket } from "@material-ui/icons";
interface IProduct {
  product: {
    availableForSale: true;
    createdAt: string;
    description: string;
    descriptionHtml: string;
    handle: string;
    title: string;
    hasNextPage: { value: boolean };
    hasPreviousPage: boolean;
    id: string;
    variants: {
      available: boolean;
      id: string;
      image: { id: string; src: string; width: number; height: number };
      price: string;
      sku: string;
      title: string;
      type: { name: string; kind: string };
      variableValues: { id: string };
      weight: number;
    }[];
    images: {
      id: string;
      src: string;
      width: number;
      height: number;
    }[];
  };
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    productDisplayRoot: {
      margin: "20px auto",
    },
    variantRadio: {
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "20px",
      width: "fit-content",
      padding: "20px",
      maxWidth: "150px",
      margin: "0 auto",
    },
    variantRadioOn: {
      backgroundColor: theme.palette.primary.main,
      border: "none",
      color: "white",
    },
    variantRow: {
      display: "block",
    },
    sectionDivider: {
      marginTop: "20px",
      marginBottom: "20px",
    },
  })
);
const Product: React.FC<IProduct> = ({ product }) => {
  const styles = useStyles();
  const [variantSelected, setVariantSelected] = useState<any>({
    id: undefined,
  });
  const [quantity, setQuantity] = useState<number>(1);
  const shopifyContext = useShopifyProvider();

  const addToCart = async () => {
    if (variantSelected && quantity) {
      const cart = await Client.checkout.addLineItems(
        shopifyContext.checkoutId,
        [{ quantity, variantId: variantSelected.id }]
      );
    }
  };
  return (
    <Container style={{ marginTop: "74px" }}>
      <Slideshow images={product.images} />
      <Container className={styles.productDisplayRoot}>
        <Typography align="center" variant="h4">
          Title:
        </Typography>
        <Typography align="center" variant="h2">
          {product.title}
        </Typography>
        <Divider className={styles.sectionDivider} />
        <Typography align="center" variant="h4">
          About The Product:
        </Typography>
        <Typography align="center" variant="body1">
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        </Typography>
        <Divider />
        <Box>
          <Grid
            spacing={3}
            container
            style={{
              margin: "20px auto",
              maxWidth: "50%",
              padding: 0,
            }}
          >
            <Grid item xs={12}>
              <Typography align="center" variant="h4">
                Variants:
              </Typography>
            </Grid>
            {product.variants.map((variant) => {
              return (
                <Grid key={variant.id} item xs={12} sm={6} lg={4}>
                  <Box
                    onClick={() => {
                      setVariantSelected(variant);
                    }}
                    className={
                      styles.variantRadio +
                      ` ${
                        variantSelected.id === variant.id
                          ? styles.variantRadioOn
                          : ""
                      }`
                    }
                  >
                    <Box>
                      <Typography className={styles.variantRow} variant="h5">
                        {variant.title}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography className={styles.variantRow} variant="h4">
                        {variant.price + " $"}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
            {variantSelected.id && (
              <Grid item xs={12}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  style={{ margin: "15px auto" }}
                >
                  <TextField
                    label="quantity"
                    type="number"
                    value={quantity}
                    onChange={(ev) =>
                      setQuantity(+ev.target.value > 1 ? +ev.target.value : 1)
                    }
                  />
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  style={{ margin: "15px auto" }}
                >
                  <Typography variant="body1">Total:</Typography>
                  <Typography style={{ padding: "10px" }} variant="h4">
                    {quantity * +variantSelected.price} $
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  style={{ margin: "15px auto" }}
                >
                  <Button
                    onClick={addToCart}
                    variant="outlined"
                    color="primary"
                  >
                    <ShoppingBasket style={{ margin: "0 5px" }} />
                    Add To Cart
                  </Button>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default Product;
