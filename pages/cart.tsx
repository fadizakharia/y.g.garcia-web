import CartItems from "../src/components/CartItems";
import { useShopifyProvider } from "../src/utils/ShopifyCartContext";

const cart = () => {
  return <CartItems />;
};

export default cart;
