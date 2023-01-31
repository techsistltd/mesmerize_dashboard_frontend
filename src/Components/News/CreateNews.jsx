import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import TextEditor from "../Shared/TextEditor";

const CreateNews = () => {
  return (
    <Box sx={{ width: "930px" }}>
      <Box>
        <Typography variant="body4" color="textBlack">
          Title
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Type here... "
          sx={{
            border: 1,
            borderColor: "primary.main",
            width: 1,
            borderRadius: "5px",
            mt: "10px",
          }}
        />
      </Box>
      <TextEditor />
    </Box>
  );
};

export default CreateNews;
