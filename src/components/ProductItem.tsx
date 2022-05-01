import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import ProductATC from "./ProductATC";
interface IProductItem {
  product: {
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
  };
}
const ProductItem: React.FC<IProductItem> = ({ product }) => {
  const router = useRouter();
  return (
    <Card>
      <CardHeader
        title={product.handle.replaceAll("-", " ")}
        style={{ textAlign: "center" }}
      />
      <CardMedia
        component={"img"}
        src={
          product.images
            ? product.images[0].src
            : "https://plchldr.co/i/500x250?text=No%20Image%20Found"
        }
      />
      <CardContent>
        <Typography variant={"body1"}>
          {product.description.substring(0, 150)} ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={(ev) => {
            ev.preventDefault();
            router.push("/products/" + product.id);
          }}
          color={"primary"}
          style={{ margin: "0 auto" }}
        >
          <Typography variant="h5">View Product</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
