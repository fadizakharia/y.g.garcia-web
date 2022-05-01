import React, { createContext, useContext, useEffect, useState } from "react";
import Client from "./shopify";
const LoadingContext = createContext<
  { isLoading: any; setIsLoading: any } | undefined
>(undefined);
interface ILoadingProvider {}
export const LoadingProvider: React.FC<ILoadingProvider> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoadingProvider() {
  const context = useContext(LoadingContext);

  if (!context)
    throw new Error(
      "useLoadingProvider must be used inside a `LoadingProvider`"
    );

  return context;
}
