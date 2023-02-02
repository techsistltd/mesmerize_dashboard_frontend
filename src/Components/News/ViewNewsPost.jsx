import { Box, Button } from "@mui/material";
import React from "react";
import { FaPen } from "react-icons/fa";
import CreateNews from "./CreateNews";

const EditNews = ({ setViewNewsPost }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={() => setViewNewsPost(null)}
          variant="button3"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaPen /> Edit News
        </Button>
      </Box>
      <CreateNews />
    </Box>
  );
};

export default EditNews;
