import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import styles from "./AboutUs.module.scss";

const StyledFooterAboutUs = styled(Box)`
  padding: 25px;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooterAboutUs className={styles.footer} mt={5}>
      <Grid container>
        <Grid item md={3} sm={3}>
          column 1
        </Grid>
        <Grid item md={3} sm={3}>
          <Typography fontWeight="bolder">About Us</Typography>
          <Typography>Our Company</Typography>
          <Typography>Careers</Typography>
        </Grid>
        <Grid item md={3} sm={3}>
          <Typography fontWeight="bolder">Store</Typography>
          <Typography>Gift Cards</Typography>
        </Grid>
        <Grid item md={3} sm={3}>
          <Typography fontWeight="bolder">Customer Service</Typography>
          <Typography>Contact Us</Typography>
        </Grid>
      </Grid>
    </StyledFooterAboutUs>
  );
};

export default Footer;
