import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const UserImageAndName = ({ currentUser }) => {
  return (
    <Grid item xs={4}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          py: "30px",
        }}
      >
        <Avatar
          src={currentUser?.profile_pic}
          sx={{ height: "120px", width: "120px" }}
        />
        <Box
          sx={{
            display: " flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="body4" color="textBlack">
            user ID: #{currentUser?.id}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "textBlack", fontWeight: 600 }}
          >
            {currentUser?.full_name}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default UserImageAndName;
