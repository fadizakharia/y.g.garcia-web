import React, { createContext, useContext, useEffect, useState } from "react";
import Client from "./shopify";
const ShopifyContext = createContext<
  | { checkoutId: any; setCheckoutId: any; change: boolean; setChange: any }
  | undefined
>(undefined);
interface IShopifyProvider {}
export const ShopifyProvider: React.FC<IShopifyProvider> = ({ children }) => {
  const [checkoutId, setCheckoutId] = useState<any>();
  const [change, setChange] = useState<boolean>(false);
  useEffect(() => {
    const setInitialCart = async () => {
      const cart = await Client.checkout.create();
      setCheckoutId(cart.id);
      if (typeof window !== "undefined") {
        localStorage.setItem("checkoutId", cart.id as string);
      }
    };
    if (typeof window !== "undefined") {
      let checkoutIdLS = localStorage.getItem("checkoutId");
      if (checkoutIdLS) {
        setCheckoutId(checkoutIdLS);
      } else {
        setInitialCart();
      }
    }
  });
  return (
    <ShopifyContext.Provider
      value={{
        checkoutId,
        setCheckoutId,
        change,
        setChange,
      }}
    >
      {children}
    </ShopifyContext.Provider>
  );
};

export function useShopifyProvider() {
  const context = useContext(ShopifyContext);

  if (!context)
    throw new Error(
      "useShopifyProvider must be used inside a `ShopifyProvider`"
    );

  return context;
}
