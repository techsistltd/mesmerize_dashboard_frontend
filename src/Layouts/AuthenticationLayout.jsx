import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Outlet />
    </Container>
  );
};

export default AuthenticationLayout;
