import { Badge, IconButton } from "@material-ui/core";
import { ShoppingBasketOutlined } from "@material-ui/icons";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Cart as shopifyCartT } from "shopify-buy";
import Client from "../utils/shopify";
import { useShopifyProvider } from "../utils/ShopifyCartContext";
import CartItems from "./CartItems";
const Cart = () => {
  const [nbItemsInCart, setNbItemsInCart] = useState<number>(0);
  const router = useRouter();
  const [cart, setCart] = useState<shopifyCartT | undefined>();
  const shopifyStore = useShopifyProvider();
  useEffect(() => {
    const fetchCart = async () => {
      const fetchedCart = await Client.checkout.fetch(shopifyStore.checkoutId);
      let count = 0;
      fetchedCart.lineItems.map((it) => {
        count += it.quantity;
      });

      setNbItemsInCart(count);
      setCart(fetchedCart);
    };
    fetchCart();
  }, [shopifyStore.checkoutId]);

  return (
    <React.Fragment>
      <IconButton
        onClick={(ev) => {
          ev.preventDefault();
          router.replace("/cart");
        }}
      >
        <Badge badgeContent={nbItemsInCart} color="primary">
          <ShoppingBasketOutlined color="secondary" />
        </Badge>
      </IconButton>
    </React.Fragment>
  );
};

export default Cart;
