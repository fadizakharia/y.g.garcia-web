import React from "react";
import react from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../styles/standardtheme";
import Layout from "../src/components/Layout";
import { ShopifyProvider } from "../src/utils/ShopifyCartContext";
import { LoadingProvider } from "../src/utils/LoadingContext";
import NextNProgress from "nextjs-progressbar";
import LoadingSpinner from "../src/components/LoadingSpinner";
export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Y.G. Garcia</title>
        <meta
          name="description"
          content={
            "Y.G. García is a debut author trailblazing in the novelization of the Japanese Tokusatsu Genre. His first novel The Jewel of Her Desire, sets the pace for a long series of books told using beloved sentai tropes."
          }
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <link rel="stylesheet" href="/fonts/porcelain/style.css" />

        <link rel="stylesheet" href="/fonts/Roboto/stylesheet.css" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <LoadingProvider>
            <ShopifyProvider>
              <NextNProgress color="#fcec9c" height={6} />
              <LoadingSpinner />
              <Component {...pageProps} />
            </ShopifyProvider>
          </LoadingProvider>
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
