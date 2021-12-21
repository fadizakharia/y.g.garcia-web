import {
  Container,
  createStyles,
  Divider,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import Axios from "axios";
import React from "react";
import BlogListContainer from "../src/components/BlogListContainer";
import Hero from "../src/components/Hero";
import MailChimp from "../src/components/MailChimp";
import SocialMediaIcons from "../src/components/SocialMediaIcons";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    HouseLWrapper: {
      backgroundColor: theme.palette.primary.dark,
    },
    HouseL: {
      backgroundColor: "white",
    },
    paperWrapper: {
      backgroundColor: theme.palette.primary.main,
    },
    HousePaper: {
      margin: "50px auto 57px auto",
      padding: "10px",

      boxSizing: "content-box",
      [theme.breakpoints.up("sm")]: {
        width: "50vw",
      },
    },
    HousePaperTextField: {
      padding: "10px 0 0 0",
      width: "50%",
      margin: "0 auto",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    HousePaperButton: {
      textAlign: "center",
      padding: "15px 0",
    },
  })
);
export async function getServerSideProps() {
  try {
    const result = await Axios.get(
      "https://blog.yggarcia.com/index.php?rest_route=/wp/v2/posts&_embed"
    );
    const featuredResult = await Axios.get(
      "https://blog.yggarcia.com/index.php?rest_route=/wp/v2/posts&categories=15&_embed"
    );
    if (result.status === 200 && featuredResult.status === 200) {
      return {
        props: {
          posts: result.data,
          featuredPosts: featuredResult.data,
        },
      };
    }
  } catch (err) {
    return {
      props: {
        error: err,
      },
    };
  }
}

export default function Index(props) {
  const styles = useStyles();

  return (
    <React.Fragment>
      <Hero />

      {!props.error && props.featuredPosts ? (
        <BlogListContainer
          posts={props.featuredPosts}
          nbOfElementsPerPage={3}
          blogListSectionTitle={"featured posts"}
        />
      ) : (
        <React.Fragment>
          <Typography variant="h5">
            In case this shows up and some potato messed up:
          </Typography>
          <Typography variant="body1">
            the blog posts cannot load at this time try again later!
          </Typography>
        </React.Fragment>
      )}
      {!props.error && props.posts ? (
        <BlogListContainer
          posts={props.posts}
          nbOfElementsPerPage={3}
          blogListSectionTitle={"Latest posts"}
        />
      ) : (
        <React.Fragment>
          <Typography variant="h5">
            In case this shows up and some potato messed up:
          </Typography>
          <Typography variant="body1">
            the blog posts cannot load at this time try again later!
          </Typography>
        </React.Fragment>
      )}

      <Container>
        <Paper
          className={styles.HousePaper}
          elevation={3}
          variant="elevation"
          square
        >
          <Typography align="center" variant="body1">
            Stay up to date on the novel by following us on social media:
          </Typography>
          <SocialMediaIcons />
          <Divider style={{ margin: "20px 0" }} />
          <MailChimp />
        </Paper>
      </Container>
    </React.Fragment>
  );
}
