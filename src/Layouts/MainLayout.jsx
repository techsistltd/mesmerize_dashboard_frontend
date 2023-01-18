import { Box, Container, Toolbar } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DrawerHeader from "../Components/Shared/DrawerHeader";
import ThemeLayout from "./ThemeLayout";

const MainLayout = () => {
  // Scroll-to-top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <ThemeLayout>
      <Container maxWidth="xl" sx={{ display: "flex" }}>
        <DrawerHeader />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Toolbar sx={{ mb: "40px" }} />
          <Container
            maxWidth="xl"
            sx={{
              flexGrow: 1,
              height: 1,
            }}
          >
            <Outlet />
          </Container>
        </Box>
      </Container>
    </ThemeLayout>
  );
};

export default MainLayout;
