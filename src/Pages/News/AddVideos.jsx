import { Paper } from "@mui/material";
import React from "react";
import CreateVideos from "../../Components/News/CreateVideos";

const AddVideos = () => {
  return (
    <Paper sx={{ py: "30px", px: "75px" }}>
      <CreateVideos />
    </Paper>
  );
};

export default AddVideos;
