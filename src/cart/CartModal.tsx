import React from "react";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";
import { setIsCartModalOpen } from "../store/cartSlice";
import CartQuantityModifier from "../ui-elements/CartQuantityModifier";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledButton = styled(Button)`
  width: 200px;
  font-size: 12px;
  padding: 0px;
  text-wrap: nowrap;
`;

const CartModal = () => {
  const dispatch = useDispatch();

  const { isCartModalOpen, currentCartItem } = useSelector(
    (state: RootState) => state.cartDetails
  );

  const handleContinueShopping = () => {
    dispatch(setIsCartModalOpen(false));
  };

  return (
    <Box>
      <Modal
        open={isCartModalOpen}
        onClose={() => {}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" flexDirection="column">
            <Box mb={3}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                textAlign="center"
              >
                Added to your cart
              </Typography>
            </Box>
            <Grid container>
              <Grid item md={3} sm={3}>
                <img src={currentCartItem?.thumbnail} alt="" width="100px" />
              </Grid>
              <Grid item md={5} sm={5}>
                <b>{currentCartItem?.name}</b>
                <br />
                <i>{currentCartItem?.description}</i>
                <br />
                <i>${currentCartItem?.price.toFixed(2)}</i>
                <CartQuantityModifier />
              </Grid>
              <Grid
                item
                md={4}
                sm={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box mb={1}>
                  <StyledButton variant="outlined">View Cart</StyledButton>
                </Box>
                <Box>
                  <StyledButton
                    variant="contained"
                    onClick={handleContinueShopping}
                  >
                    Continue shopping
                  </StyledButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default CartModal;
