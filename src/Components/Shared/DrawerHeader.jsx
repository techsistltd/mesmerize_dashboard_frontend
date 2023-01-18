import { AppBar, Box, Drawer, Toolbar } from "@mui/material";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../Assets/BrandLogo.svg";
import SideNavigations from "./SideNavigations";
import TopBar from "./TopAppBar";

// drawer Width
const drawerWidth = 240;

const Header = () => {
  return (
    <Fragment>
      <AppBar
        color="color6"
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          color: "textblack",
          boxShadow: 2,
        }}
      >
        <TopBar />
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            bgcolor: "color13.main",
            color: "white",
            width: drawerWidth,
            boxSizing: "border-box",
          },
          "& svg": {
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar
          sx={{
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <Box component="img" src={BrandLogo} />
          </Link>
        </Toolbar>
        <SideNavigations />
      </Drawer>
    </Fragment>
  );
};

export default Header;
