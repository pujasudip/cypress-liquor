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
import { useDispatch, useSelector } from "react-redux";
import { setIsSideMenuOpen } from "../store/menuSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RootState } from "../store";
import Cookies from "js-cookie";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CompanyLogo from "../assets/baralko-pasal-logo.png";

const TopNav: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: RootState) => state.userDetails);
  const [searchParams, setSearchParams] = useSearchParams();

  const getData = async () => {
    const res = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_USERS}/get-users`,
    });
    console.log("res:", res);
  };

  const handleSideMenuOpen = () => {
    dispatch(setIsSideMenuOpen(true));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      Cookies.set("code", code);
    } else {
      Cookies.remove("code");
    }
  }, [navigate, searchParams]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#51bebd",
        }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
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
          <Box>
            <img src={CompanyLogo} alt="company logo" width="50px" />
          </Box>
          {isLoggedIn ? (
            <Box display="flex" alignItems="center">
              <Box mr={1}>
                <AccountCircleIcon />
              </Box>
              <Typography>Hello Sudip!</Typography>
            </Box>
          ) : (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNav;
