import { Box } from "@mui/material";
import React, { useMemo, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const HomeCarousel: React.FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const isMobile = useMemo(() => {
    return window.innerWidth <= 768;
  }, []);

  const images = [
    {
      original:
        "https://cypress-liquor-images.s3.us-east-2.amazonaws.com/bhindi.jpeg",
      thumbnail:
        "https://cypress-liquor-images.s3.us-east-2.amazonaws.com/bhindi_thumb.jpeg",
    },
    {
      original:
        "https://cypress-liquor-images.s3.us-east-2.amazonaws.com/fal.jpeg",
      thumbnail:
        "https://cypress-liquor-images.s3.us-east-2.amazonaws.com/fal_thumb.jpeg",
    },
    {
      original:
        "https://cypress-liquor-images.s3.us-east-2.amazonaws.com/sarifa.jpeg",
      thumbnail:
        "https://cypress-liquor-images.s3.us-east-2.amazonaws.com/sarifa_thumb.jpeg",
    },
  ];

  const handleLeftArrowClick = () => {
    if (imageIndex <= 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (imageIndex >= images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const handleCircleIconClick = (index: number) => {
    setImageIndex(index);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center" alignItems="center" py={2}>
        <Box>
          <ArrowBackIosIcon
            onClick={handleLeftArrowClick}
            className={styles.arrowPointer}
            style={{
              color: "black",
              fontSize: "35px",
            }}
          />
        </Box>
        <Box>
          <img
            src={images[imageIndex].original}
            alt="test"
            width={isMobile ? 300 : 500}
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            {images.map((_, index) => {
              return (
                <CircleIcon
                  className={cx("circleIcon", {
                    circleIconSelected: index === imageIndex,
                  })}
                  onClick={() => handleCircleIconClick(index)}
                  color="action"
                />
              );
            })}
          </Box>
        </Box>
        <Box>
          <ArrowForwardIosIcon
            className={styles.arrowPointer}
            onClick={handleRightArrowClick}
            style={{
              color: "black",
              fontSize: "35px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeCarousel;
