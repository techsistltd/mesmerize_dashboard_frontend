import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Global/GlobalContext";

const ViewUserProfile = () => {
  const { currentUser } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <Grid
      container
      columnSpacing={"30px"}
      sx={{ display: "flex", justifyContent: "center" }}
    >
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
      <Grid item xs={6}>
        <Paper
          sx={{
            padding: "42px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body3"
              sx={{
                position: "relative",
                "&:after": {
                  content: `""`,
                  position: "absolute",
                  width: "72px",
                  height: "2px",
                  bgcolor: "textBlack",
                  bottom: "-8px",
                  left: 0,
                  mx: "auto",
                },
              }}
            >
              Admin Information
            </Typography>
            <Button
              onClick={() => navigate("/profile/edit")}
              variant="button3"
              sx={{
                gap: "9px",
                fontSize: "16px",
                py: "5px",
                px: " 10px",
              }}
            >
              <FaPen />
              Edit
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: " 6px" }}>
                <Typography
                  variant="body4"
                  sx={{ coor: "textBlack", fontWeight: 600 }}
                >
                  Email :
                </Typography>
                <Typography variant="body6" color={"textBlack"}>
                  {currentUser?.email}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: " 6px" }}>
                <Typography
                  variant="body4"
                  sx={{ coor: "textBlack", fontWeight: 600 }}
                >
                  Password :
                </Typography>
                <Typography variant="body6" color={"textBlack"}>
                  {currentUser?.password}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: " 6px" }}>
                <Typography
                  variant="body4"
                  sx={{ coor: "textBlack", fontWeight: 600 }}
                >
                  Gender :
                </Typography>
                <Typography variant="body6" color={"textBlack"}>
                  {currentUser?.gender}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: " 6px" }}>
                <Typography
                  variant="body4"
                  sx={{ coor: "textBlack", fontWeight: 600 }}
                >
                  Phone :
                </Typography>
                <Typography variant="body6" color={"textBlack"}>
                  {currentUser?.phone_number}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: " 6px" }}>
                <Typography
                  variant="body4"
                  sx={{ coor: "textBlack", fontWeight: 600 }}
                >
                  Status :
                </Typography>
                <Typography variant="body6" color={"textBlack"}>
                  {currentUser?.is_active}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: " 6px" }}>
                <Typography
                  variant="body4"
                  sx={{ coor: "textBlack", fontWeight: 600 }}
                >
                  Date of Birth :
                </Typography>
                <Typography variant="body6" color={"textBlack"}>
                  {currentUser?.birth_date}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ViewUserProfile;
