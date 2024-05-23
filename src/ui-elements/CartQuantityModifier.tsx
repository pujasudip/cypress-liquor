import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, TextField } from "@mui/material";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  width: 50px;
`;

const CartQuantityModifier: React.FC = () => {
  return (
    <Box display="flex" alignItems="center">
      <RemoveIcon />
      <StyledTextField value={1} size="small" />
      <AddIcon />
    </Box>
  );
};

export default CartQuantityModifier;
