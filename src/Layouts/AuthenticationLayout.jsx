import { AppBar, Box, Container, Toolbar } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import BrandLogo from "../Assets/BrandLogo.svg";

const AuthenticationLayout = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <AppBar
        color="color6"
        position="fixed"
        sx={{
          bgcolor: "primary.main",
          color: "white",
        }}
      >
        <Toolbar
          sx={{
            padding: "12px 24px !important",
          }}
        >
          <Link to="/auth">
            <Box component="img" src={BrandLogo} />
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
};

export default AuthenticationLayout;
