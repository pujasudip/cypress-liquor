import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Drawer } from "@mui/material";
import LiquorIcon from "@mui/icons-material/Liquor";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import { setIsSideMenuOpen } from "../store/menuSlice";
import axios from "axios";

type Anchor = "top" | "left" | "bottom" | "right";

export const SideMenu = () => {
  const { isSideMenuOpen } = useSelector(
    (state: RootState) => state.menuDetails
  );

  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = React.useState<string[][]>([[], []]);

  useEffect(() => {
    axios("https://www.pujathreading.shop/side-menu", {
      method: "GET",
    }).then((res): any => {
      console.log("res:", res);
      setMenuItems(res?.data);
    });
  }, []);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleDrawerClose = () => {
    dispatch(setIsSideMenuOpen(false));
  };

  const handleIconRender = (category: string) => {
    switch (category.toLowerCase()) {
      case "whisky":
        return <LiquorIcon />;
      case "beer":
        return <SportsBarIcon />;
      case "grocery":
        return <LocalGroceryStoreIcon />;
      case "clothes":
        return <CheckroomIcon />;
      default:
        return <LocalTaxiIcon />;
    }
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems[0].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{handleIconRender(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {menuItems[1].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{handleIconRender(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="left" open={isSideMenuOpen} onClose={handleDrawerClose}>
        {list("left")}
      </Drawer>
    </div>
  );
};

export default SideMenu;
