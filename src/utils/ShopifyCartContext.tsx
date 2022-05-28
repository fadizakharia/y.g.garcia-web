import React, { createContext, useContext, useEffect, useState } from "react";
import Client from "./shopify";
export interface customLineItem {
  lineItem: { id: string; quantity: number };
}
export interface customLineItems {
  lineItems: { id: string; quantity: number }[];
}
const ShopifyContext = createContext<
  | {
      checkoutId: any;
      setCheckoutId: any;
      lineItems: customLineItems;
      setLineItems: any;
    }
  | undefined
>(undefined);
interface IShopifyProvider {}
export const ShopifyProvider: React.FC<IShopifyProvider> = ({ children }) => {
  const [checkoutId, setCheckoutId] = useState<any>();

  const [lineItems, setLineItems] = useState<customLineItems>({
    lineItems: [],
  });
  useEffect(() => {
    const setInitialCart = async () => {
      const cart = await Client.checkout.create();
      setCheckoutId(cart.id);
      if (typeof window !== "undefined") {
        localStorage.setItem("checkoutId", cart.id as string);
      }
    };
    const setInitialLineItems = async (checkoutId: string) => {
      const cart = await Client.checkout.fetch(checkoutId);
      const newLineItems = cart.lineItems.map((item) => {
        return { id: item.id as string, quantity: item.quantity };
      });
      setLineItems({ lineItems: newLineItems });
    };
    if (typeof window !== "undefined") {
      let checkoutIdLS = localStorage.getItem("checkoutId");
      if (checkoutIdLS) {
        setCheckoutId(checkoutIdLS);
        setInitialLineItems(checkoutIdLS);
      } else {
        setInitialCart();
      }
    }
  }, [checkoutId, JSON.stringify(lineItems)]);
  return (
    <ShopifyContext.Provider
      value={{
        checkoutId,
        setCheckoutId,
        lineItems,
        setLineItems,
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
