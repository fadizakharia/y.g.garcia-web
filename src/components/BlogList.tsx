import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

interface IBlogList {
  postsArr: Array<{
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
  }>;
}
const BlogList: React.FC<IBlogList> = ({ postsArr }) => {
  const [posts, setPosts] = useState<typeof postsArr>();
  useEffect(() => {
    setPosts(postsArr);
    return () => {};
  }, [postsArr]);

  return (
    <Grid style={{ margin: 0, width: "100%" }} container spacing={2}>
      {posts &&
        posts.map((post) => {
          return (
            <Grid key={post.id} item xs={12} sm={6} md={4}>
              <Container>
                <BlogPost post={post} />
              </Container>
            </Grid>
          );
        })}
    </Grid>
  );
};
export default BlogList;
