import React from "react";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import { Grid, IconButton, Box } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
const SocialMediaIcons = () => {
  const router = useRouter();
  const handleSocialReroute = (url: string) => {
    router.push(url);
  };
  return (
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={2}>
        <Box textAlign="center">
          <IconButton
            onClick={() =>
              handleSocialReroute("https://www.facebook.com/yggarciaauthor/")
            }
          >
            <Facebook />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box textAlign="center">
          <IconButton
            onClick={() =>
              handleSocialReroute("https://www.instagram.com/yggarcia_author/")
            }
          >
            <Instagram />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box textAlign="center">
          <IconButton
            onClick={() =>
              handleSocialReroute("https://twitter.com/yggarciaauthor")
            }
          >
            <Twitter />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default SocialMediaIcons;
