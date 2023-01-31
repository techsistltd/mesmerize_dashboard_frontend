import { Paper } from "@mui/material";
import React from "react";
import CreateNews from "../../Components/News/CreateNews";

const AddNews = () => {
  return (
    <Paper sx={{ display: "flex", justifyContent: "center", py: "25px" }}>
      <CreateNews />
    </Paper>
  );
};

export default AddNews;
