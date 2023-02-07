import { Paper } from "@mui/material";
import React from "react";
import AllNotification from "../Components/Notification/AllNotification";

const Notification = () => {
  return (
    <Paper sx={{ padding: "30px" }}>
      <AllNotification />
    </Paper>
  );
};

export default Notification;
