import { Box, Button } from "@mui/material";
import React from "react";
import CreateNews from "./CreateNews";

const EditNews = ({ setEditNews }) => {
  return (
    <Box>
      <CreateNews />
      <Button
        onClick={() => setEditNews(null)}
        variant="button3"
        sx={{ mt: "40px" }}
      >
        Update
      </Button>
    </Box>
  );
};

export default EditNews;
