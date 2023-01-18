import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "0 !important",
        }}
      >
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
    </ThemeLayout>
  );
};

export default MainLayout;
