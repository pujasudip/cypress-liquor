import { Box, Button, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import styles from "./cart.module.scss";
import { Product } from "../types";
import { setCurrentCartItem, setIsCartModalOpen } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const StyledPaper = styled(Paper)`
  width: 200px;
  position: relative;
  margin: 5px;
  height: 275px;
  padding: 15px;
`;

const AddToCart: React.FC<{ item: Product }> = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(setIsCartModalOpen(true));
    dispatch(setCurrentCartItem(item));
  };

  return (
    <StyledPaper>
      <Box display="flex" justifyContent="center" mb={2}>
        <img
          src={item.thumbnail}
          alt=""
          width={75}
          style={{ clipPath: "circle(45%)" }}
        />
      </Box>
      <Typography fontWeight="bolder">{item.name}</Typography>
      <Typography fontStyle="italic">{item.description}</Typography>
      <Box className={styles.addToCartButton}>
        <Box display="flex">
          <Rating name="simple-controlled" value={item.rating} readOnly />
          <Typography>({item.ratingCount})</Typography>
        </Box>
        <Typography fontWeight="bold" mb={1}>
          ${item.price.toFixed(2)}
        </Typography>
        <Box display="flex" justifyContent="center">
          {item.stock > 0 ? (
            <Button
              variant="contained"
              style={{
                width: "90%",
                textWrap: "nowrap",
              }}
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          ) : (
            <Button variant="contained" disabled>
              Out Of Stock
            </Button>
          )}
        </Box>
      </Box>
    </StyledPaper>
  );
};

export default AddToCart;
