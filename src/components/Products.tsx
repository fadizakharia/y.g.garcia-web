import { Grid } from "@material-ui/core";
import React from "react";
import ProductItem from "./ProductItem";
interface IProducts {
  products: {
    availableForSale: true;
    createdAt: string;
    description: string;
    descriptionHtml: string;
    handle: string;
    hasNextPage: { value: boolean };
    hasPreviousPage: boolean;
    id: string;
    images: {
      id: string;
      src: string;
    }[];
  }[];
}
const Products: React.FC<IProducts> = ({ products }) => {
  return (
    <Grid
      container
      spacing={3}
      style={{
        width: "100%",
        margin: "148px auto 20px auto",
      }}
    >
      {products.map((product) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductItem product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Products;
