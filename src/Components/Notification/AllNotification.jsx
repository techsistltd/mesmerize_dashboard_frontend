import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Badge,
  Divider,
} from "@mui/material";
import React, { Fragment } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import UserAvatar from "../../Assets/UserAvatar.png";

const AllNotification = () => {
  return (
    <Box>
      {/* titel and icon */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "50px",
        }}
      >
        <Typography variant="body3" color="textBlack">
          All Notification
        </Typography>
        <IconButton>
          <BsThreeDotsVertical />
        </IconButton>
      </Box>
      {/* -----end----- */}
      {new Array(5).fill(null).map((_, idx, arr) => {
        return (
          <Fragment key={idx}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                {/* avatar with badge */}
                <Badge
                  badgeContent={<BiMessageDetail />}
                  color="color15"
                  sx={{
                    "& .MuiBadge-badge": {
                      height: "24px",
                      borderRadius: "12px",
                      color: "white",
                      right: 5,
                      top: 45,
                    },
                  }}
                >
                  <Avatar
                    src={UserAvatar}
                    sx={{ height: "54px", width: "54px" }}
                  ></Avatar>
                </Badge>
                {/* ----end---- */}
                <Box>
                  <Typography variant="body4" color="textBlack">
                    Autoland added to his favorite list Mercedez benz super
                    mclaren
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "color1.main" }}>
                    About few minutes ago!
                  </Typography>
                </Box>
              </Box>
              <IconButton sx={{ color: "textBlack" }}>
                <MdDelete />
              </IconButton>
            </Box>
            {Boolean(idx < arr.length - 1) && <Divider sx={{ my: "20px" }} />}
          </Fragment>
        );
      })}
    </Box>
  );
};

export default AllNotification;
