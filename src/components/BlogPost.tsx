import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import React from "react";
import { htmlToText } from "html-to-text";
import Link from "next/link";
interface IBlogPost {
  post: {
    title: { rendered: string };
    content: { rendered: string };
    link: string;
    date: string;
    id: number;
    ["wp:featuredmedia"]: [
      {
        href: string;
      }
    ];
  };
}
const BlogPost: React.FC<IBlogPost> = ({ post }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{htmlToText(post.title.rendered)}</Typography>
        <Typography style={{ margin: "5px 0 20px 0" }} variant="subtitle1">
          {moment(post.date).format("DD-MM-YYYY / hh:mm A")}
        </Typography>
        <Typography variant="body1">
          {htmlToText(post.content.rendered).substring(0, 200)}...
        </Typography>

        <CardActions style={{ marginTop: "20px", justifyContent: "end" }}>
          <Link href={post.link} passHref>
            <Button color="primary" variant="text">
              Read More
            </Button>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
};
export default BlogPost;
