import React, { useMemo } from "react";
import { Box } from "@mui/material";
import TopNav from "../topNav/TopNav";
import SideMenu from "../side-menu/SideMenu";
import HomeCarousel from "./HomeCarousel";
import HomeSignUpCard from "../logins/HomeSignUpCard";
import styled from "styled-components";
import TrendingBanner from "../trending/TrendingBanner";
import CartModal from "../cart/CartModal";

const StyledBox = styled(Box)<{ $isMobile: boolean }>`
  width: ${(props) => (props.$isMobile ? "100%" : "50%")};
`;

const Home: React.FC = () => {
  const isMobile = useMemo(() => {
    return window.innerWidth <= 768;
  }, []);

  return (
    <Box>
      <TopNav />
      <SideMenu />
      <Box display="flex" flexDirection={isMobile ? "column" : "row"}>
        <StyledBox $isMobile={isMobile}>
          <HomeCarousel />
        </StyledBox>
        <StyledBox $isMobile={isMobile}>
          <HomeSignUpCard />
        </StyledBox>
      </Box>
      <TrendingBanner />
      <CartModal />
    </Box>
  );
};

export default Home;
