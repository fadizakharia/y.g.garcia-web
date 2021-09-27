import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
    mediaWrapper: {},
    mediaContainer: {
      maxHeight: "720px",
      maxWidth: "1280px",
      margin: "0 auto",
      objectFit: "scale-down",
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
            <div key={image.key} className={styles.mediaContainer}>
              <Image
                width="640px"
                height="360px"
                layout="responsive"
                loader={function () {
                  return image.imageUrl;
                }}
                src={image.imageUrl}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SlideShow;
