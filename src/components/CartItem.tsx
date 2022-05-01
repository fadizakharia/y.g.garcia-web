import {
  Box,
  createStyles,
  Divider,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { LineItem } from "shopify-buy";
import { useShopifyProvider } from "../utils/ShopifyCartContext";
import Client from "../utils/shopify";
interface ICartItem {
  item: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
    },
  })
);
const CartItem: React.FC<ICartItem> = ({ item }) => {
  const shopifyContext = useShopifyProvider();

  const styles = useStyles();
  const handleDeleteItem = async () => {
    const cart = await Client.checkout.fetch(shopifyContext.checkoutId);
    shopifyContext.setChange(true);
    await Client.checkout.removeLineItems(cart.id, [item.id]);
    shopifyContext.setChange(false);
  };

  const handleUpdateItem = () => {};
  return (
    <Box className={styles.root}>
      <Box>
        <div style={{ maxWidth: "100px", height: "100px" }}>
          <Image
            width={"100px"}
            height={"100px"}
            layout="responsive"
            loader={() => {
              return item.attrs.variant.image.src;
            }}
            src={item.attrs.variant.image.src}
          />
        </div>
        <Typography variant="h5" color="primary">
          Title: {item.title}
        </Typography>
        <Typography variant="h5" color="primary">
          quantity: {item.quantity}
        </Typography>
        <Typography variant="h5" color="primary">
          price: {+item.variant.price * item.quantity + "$"}
        </Typography>
      </Box>
      <div style={{ flexGrow: 1 }} />
      <Box>
        <IconButton onClick={handleDeleteItem}>
          <Close />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
