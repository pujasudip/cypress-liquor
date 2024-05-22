import { Box, Card, CardMedia } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import styled from "styled-components";

const cx = classNames.bind(styles);

const StyledLeftBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translate(-50%);
`;

const StyledRightBox = styled(Box)`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translate(-50%);
`;

const HomeCarousel: React.FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);

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
    <Box p={2} position="relative">
      <Card sx={{ height: "400px" }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <StyledLeftBox>
            <ArrowBackIosIcon
              onClick={handleLeftArrowClick}
              className={styles.arrowPointer}
              style={{
                color: "black",
                fontSize: "35px",
              }}
            />
          </StyledLeftBox>
          <Box>
            <CardMedia
              component="img"
              image={images[imageIndex].original}
              height="400"
              alt=""
              style={{ width: "500px" }}
            />

            <Box
              style={{
                position: "absolute",
                bottom: "15px",
                left: "50%",
                transform: "translate(-50%)",
              }}
            >
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
          <StyledRightBox>
            <ArrowForwardIosIcon
              className={styles.arrowPointer}
              onClick={handleRightArrowClick}
              style={{
                color: "black",
                fontSize: "35px",
              }}
            />
          </StyledRightBox>
        </Box>
      </Card>
    </Box>
  );
};

export default HomeCarousel;
