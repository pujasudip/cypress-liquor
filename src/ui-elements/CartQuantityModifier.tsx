import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, TextField } from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setCartCount } from "../store/cartSlice";

const StyledTextField = styled(TextField)`
  width: 50px;
  input {
    text-align: center;
  }
`;

const CartQuantityModifier: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();
  const { cartCount } = useSelector((state: RootState) => state.cartDetails);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
    dispatch(setCartCount(cartCount + 1));
  };

  const handleRemoveQuantity = () => {
    if (quantity <= 0) return;
    setQuantity(quantity - 1);
    dispatch(setCartCount(cartCount - 1));
  };

  return (
    <Box display="flex" alignItems="center">
      <RemoveIcon onClick={handleRemoveQuantity} />
      <StyledTextField value={quantity} size="small" />
      <AddIcon onClick={handleAddQuantity} />
    </Box>
  );
};

export default CartQuantityModifier;
