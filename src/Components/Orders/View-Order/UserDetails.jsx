import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";

const UserDetails = () => {
  return (
    <Box>
      <Box
        sx={{
          width: 1,
          bgcolor: "color2.main",
          display: "flex",
          justifyContent: "space-between",
          padding: "16px 40px",
        }}
      >
        <Typography variant="body2" color="textBlack">
          Order #2274
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body4"
            color="textBlack"
            sx={{ borderRight: 1, pr: " 18px" }}
          >
            Order Placed : 25/05/2022 13:35 am
          </Typography>
          <Typography variant="body4" color="textBlack" sx={{ pl: " 18px" }}>
            Standard Delivery (3-4 Business Days)
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: " 40px" }}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            py: "25px",
          }}
        >
          <Avatar variant="circular" sx={{ height: "70px", width: "70px" }} />
          <Typography variant="body6" color="textBlack">
            User ID: #225
          </Typography>
          <Typography
            variant="body3"
            color="textBlack"
            sx={{ fontWeight: 600 }}
          >
            Forhad Ibn Haque
          </Typography>
          <Typography variant="body6" color="textBlack">
            +880 1780995516
          </Typography>
          <Typography variant="body6" color="textBlack">
            forhad96office@gmail.com
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default UserDetails;
