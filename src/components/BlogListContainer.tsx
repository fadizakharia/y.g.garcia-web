import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { getMergedArray } from "../utils/ArrayMapper";
import BlogList from "./BlogList";
interface IBlogListContainer {
  posts: Array<{
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
  nbOfElementsPerPage: number;
  blogListSectionTitle: string;
}
const BlogListContainer: React.FC<IBlogListContainer> = ({
  posts,
  nbOfElementsPerPage,
  blogListSectionTitle,
}) => {
  const [postsMerged, setPostsMerged] = useState<Array<typeof posts>>([]);

  const [pageIndex, setPageIndex] = useState<number>(0);

  useEffect(() => {
    setPostsMerged(getMergedArray(posts, nbOfElementsPerPage));
    return () => {};
  }, [posts, nbOfElementsPerPage]);
  const handleArrowPrevious = () => {
    setPageIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };
  const handleArrowNext = () => {
    setPageIndex((prev) => {
      if (prev < postsMerged.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  return (
    <Container style={{ maxWidth: "100%", padding: "20px" }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            color="primary"
            variant="h4"
            style={{ margin: "30px 0 20px 0" }}
          >
            {blogListSectionTitle}
          </Typography>
          <BlogList postsArr={postsMerged[pageIndex]} />
        </Grid>

        <Grid item xs={12}>
          <Box textAlign={"center"}>
            <Button
              color="primary"
              onClick={handleArrowPrevious}
              disabled={pageIndex === 0}
            >
              Previous
            </Button>
            <Button
              color="primary"
              style={{
                display: "inline-block",
              }}
              onClick={handleArrowNext}
              disabled={pageIndex === postsMerged.length - 1}
            >
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" />
    </Container>
  );
};
export default BlogListContainer;
