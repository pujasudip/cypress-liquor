import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const ViewCart: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "45%",
          height: "85vh",
          minHeight: "600px",
          minWidth: "500px",
        },
      }}
    >
      <Paper elevation={0}>
        <Typography>Your shopping cart.</Typography>
      </Paper>
      <Paper elevation={3}>
        <Typography>Order Summary</Typography>
      </Paper>
    </Box>
  );
};

export default ViewCart;
