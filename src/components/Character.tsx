import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import React from "react";
interface CharacterGridCharacterProps {
  character: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: "100%",
    },
  })
);
const Character: React.FC<CharacterGridCharacterProps> = (props) => {
  const router = useRouter();

  const styles = useStyles();

  return props.character ? (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          className={styles.media}
          image={
            props.character.images && props.character.images.length > 0
              ? props.character.images[0].imageUrl
              : "https://plchldr.co/i/500x250?text=Coming%20Soon"
          }
        />
        <CardHeader
          style={{ wordWrap: "break-word" }}
          title={props.character.name}
        ></CardHeader>
        <CardContent>
          <Typography
            style={{ wordWrap: "break-word" }}
            variant="body2"
            component="p"
          >
            {props.character.bio
              ? props.character.bio.substring(0, 50) + "..."
              : "character has no biography"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => router.push("/characters/" + props.character.id)}
          >
            Learn more
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ) : (
    <div></div>
  );
};

export default Character;
