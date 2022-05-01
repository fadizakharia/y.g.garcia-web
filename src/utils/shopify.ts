import Client from "shopify-buy";

export default Client.buildClient({
  domain: process.env.NEXT_PUBLIC_STORE_DOMAIN!,
  storefrontAccessToken: process.env.NEXT_PUBLIC_STORE_ACCESS_TOKEN!,
});
