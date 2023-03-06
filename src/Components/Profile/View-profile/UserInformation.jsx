import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserInformation = ({ currentUser }) => {
  const navigate = useNavigate();
  return (
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: " 6px",
              }}
            >
              <Typography
                variant="body4"
                sx={{
                  coor: "textBlack",
                  fontWeight: 600,
                }}
              >
                Email :
              </Typography>
              <Typography variant="body6" color={"textBlack"}>
                {currentUser?.email}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: " 6px",
              }}
            >
              <Typography
                variant="body4"
                sx={{
                  coor: "textBlack",
                  fontWeight: 600,
                }}
              >
                Join Date :
              </Typography>
              <Typography variant="body6" color={"textBlack"}>
                {moment(currentUser?.date_joined).format("ll")}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: " 6px",
              }}
            >
              <Typography
                variant="body4"
                sx={{
                  coor: "textBlack",
                  fontWeight: 600,
                }}
              >
                Gender :
              </Typography>
              <Typography variant="body6" color={"textBlack"}>
                {currentUser?.gender}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: " 6px",
              }}
            >
              <Typography
                variant="body4"
                sx={{
                  coor: "textBlack",
                  fontWeight: 600,
                }}
              >
                Phone :
              </Typography>
              <Typography variant="body6" color={"textBlack"}>
                {currentUser?.phone_number}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: " 6px",
              }}
            >
              <Typography
                variant="body4"
                sx={{
                  coor: "textBlack",
                  fontWeight: 600,
                }}
              >
                Status :
              </Typography>
              <Typography variant="body6" color={"textBlack"}>
                {Boolean(currentUser?.is_active) ? "Active" : "Inactive"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: " 6px",
              }}
            >
              <Typography
                variant="body4"
                sx={{
                  coor: "textBlack",
                  fontWeight: 600,
                }}
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
  );
};

export default UserInformation;
