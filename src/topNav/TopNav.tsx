import axios from "axios";
import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { setIsSideMenuOpen } from "../store/menuSlice";
import { useNavigate } from "react-router-dom";

const TopNav: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = async () => {
    const res = await axios({
      method: "GET",
      url: "http://www.cypress-liquor-be.shop/get-users",
    });
    console.log("res:", res);
  };

  const handleSideMenuOpen = () => {
    dispatch(setIsSideMenuOpen(true));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSideMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cypress Liquor
          </Typography>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNav;
