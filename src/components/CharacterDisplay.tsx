import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import SlideShow from "./SlideShow";
import moment from "moment";
interface props {
  character: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "64px",
    },
    wrapperGrid: {
      maxWidth: "600px",
      margin: "0 auto",
      textAlign: "center",
      width: "100%",
    },
    characterHead: {
      backgroundColor: theme.palette.primary.light,
      borderRadius: "0 30px 10px 30px",
      "&::before": {
        content: '" "',
        width: "100px",
        height: "5px",
        borderRadius: "0 30px",
        backgroundColor: theme.palette.secondary.main,
      },
      color: "white",
      margin: "10px 0",
      padding: "10px",
    },
    characterAttr: {},
  })
);
const CharacterDisplay: React.FC<props> = ({ character }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <SlideShow images={character.images} />
      <Grid spacing={4} container className={styles.wrapperGrid}>
        <Grid item xs={12}>
          <Typography
            style={{
              textDecoration: "underline",
              textTransform: "uppercase",
              marginTop: "15px",
            }}
            variant="h3"
          >
            {character.name}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" className={styles.characterHead}>
                Gender
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" className={styles.characterAttr}>
                {" "}
                {character.gender}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" className={styles.characterHead}>
                Ethnicity
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" className={styles.characterAttr}>
                {" "}
                {character.ethnicity}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" className={styles.characterHead}>
                Birthday
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" className={styles.characterAttr}>
                {" "}
                {character.date_of_birth}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" className={styles.characterHead}>
                Category
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" className={styles.characterAttr}>
                {" "}
                {character.category.title}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{character.bio}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CharacterDisplay;
/*
   id
        name
        gender
        color
        ethnicity
        bio
        date_of_birth
        images {
          id
          imageUrl
          key
        }
        category {
          id
          title
        }
      }
*/
