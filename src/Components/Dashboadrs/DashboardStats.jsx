import { Box, Typography } from "@mui/material";
import React from "react";

const DashboardStats = ({ title = "", count = "" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
        width: "226px",
        height: "130px",
        borderRadius: "10px",
        backgroundColor: "color2.main",
        color: "textBlack",
        "&:hover": {
          backgroundColor: "color3.main",
          color: "textWhite",
          transition: ".3s ease",
        },
      }}
    >
      <Typography sx={{ fontSize: "16px", lineHeight: "24px" }}>
        {title}
      </Typography>
      <Typography
        sx={{ fontSize: "22px", fontWeight: 700, lineHeight: "33px" }}
      >
        {count}
      </Typography>
    </Box>
  );
};

export default DashboardStats;
