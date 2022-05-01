import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
    mediaWrapper: {},
    mediaContainer: {
      minHeight: "720px",
      minWidth: "1280px",
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
                layout="fill"
                objectFit="contain"
                loader={function () {
                  if (image.imageUrl) {
                    return image.imageUrl;
                  } else {
                    return image.src;
                  }
                }}
                alt={image.key}
                src={image.imageUrl ? image.imageUrl : image.src}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SlideShow;
