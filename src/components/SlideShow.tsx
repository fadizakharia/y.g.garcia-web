import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
    media: {
      backgroundSize: "auto 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      width: "100vw",
      height: "50vh",

      transform: "translate(-2%)",
      [theme.breakpoints.down("xs")]: {
        transform: "translate(0)",
        backgroundSize: "100% 100%",
      },
    },
  })
);

interface SlideShowProps {
  images: any[];
}

const SlideShow: React.FC<SlideShowProps> = ({ images }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Carousel>
        {images.map((image) => {
          return (
            <div key={image.key}>
              <div
                style={{ backgroundImage: `url(${image.imageUrl})` }}
                className={styles.media}
              ></div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SlideShow;
