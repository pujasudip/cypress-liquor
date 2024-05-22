import React from "react";
import { Box } from "@mui/material";
import TopNav from "../topNav/TopNav";
import SideMenu from "../side-menu/SideMenu";
import HomeCarousel from "./HomeCarousel";

const Home: React.FC = () => {
  return (
    <Box>
      <TopNav />
      <SideMenu />
      <HomeCarousel />
    </Box>
  );
};

export default Home;
