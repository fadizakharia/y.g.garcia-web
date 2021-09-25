// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.APOLLO_URL,
  cache: new InMemoryCache(),
});

export default client;
