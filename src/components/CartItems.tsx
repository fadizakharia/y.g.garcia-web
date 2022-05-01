import {
  Box,
  Button,
  Container,
  Divider,
  Icon,
  Typography,
} from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Cart } from "shopify-buy";
import Client from "../utils/shopify";
import { useShopifyProvider } from "../utils/ShopifyCartContext";
import CartItem from "./CartItem";

const CartItems = () => {
  const shopifyContext = useShopifyProvider();
  const router = useRouter();
  const [cart, setCart] = useState<Cart | undefined>();
  const shopifyStore = useShopifyProvider();
  const handleCheckout = async () => {
    const cart = await Client.checkout.fetch(shopifyContext.checkoutId);

    router.push((cart as any).webUrl);
  };
  useEffect(() => {
    const fetchCart = async () => {
      const fetchedCart = await Client.checkout.fetch(shopifyStore.checkoutId);

      setCart(fetchedCart);
    };
    fetchCart();

    return () => {};
  }, [JSON.stringify(cart), shopifyStore.checkoutId, shopifyStore.change]);

  return (
    <Container style={{ marginTop: "74px" }}>
      {cart && cart.lineItems.length > 0 ? (
        <React.Fragment>
          {cart.lineItems.map((item) => {
            return (
              <React.Fragment>
                <CartItem item={item} />
                <Divider />
              </React.Fragment>
            );
          })}
          <Box textAlign={"center"} margin="50px">
            <Button
              onClick={handleCheckout}
              variant="contained"
              color="primary"
            >
              Proceed to Checkout
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <Container>
          <CloseRounded
            style={{
              fontSize: "300px",
              marginTop: "74px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              textAlign: "center",
              color: "red",
            }}
          />

          <Typography align="center" style={{ color: "red" }} variant="h4">
            Your cart is empty!
          </Typography>
          <Typography
            align="center"
            style={{ color: "red", marginTop: "20px", marginBottom: "200px" }}
            variant="h4"
          >
            Please visit the products page to add more items to the cart.
          </Typography>
        </Container>
      )}
    </Container>
  );
};

export default CartItems;
