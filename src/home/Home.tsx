import React from "react";
import { Box } from "@mui/material";
import TopNav from "../topNav/TopNav";
import SideMenu from "../side-menu/SideMenu";

const Home: React.FC = () => {
  return (
    <Box>
      <TopNav />
      <SideMenu />
    </Box>
  );
};

export default Home;
