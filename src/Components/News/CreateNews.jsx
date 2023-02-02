import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { categories, newsType, status } from "../../data/AddNewsData";
import TextEditor from "../Shared/TextEditor";

const CreateNews = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState("");

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
      <TextEditor setValue={setValue} />
      {/* 1st selection section author, category, file */}
      <Box
        component="form"
        sx={{ display: "flex", justifyContent: "space-between", my: "30px" }}
      >
        {/* author */}
        <Box>
          <Typography variant="body4" color="textBlack">
            Author Name
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Type here... "
            sx={{
              border: 1,
              borderColor: "primary.main",
              width: "295px",
              borderRadius: "5px",
              mt: "10px",
            }}
          />
        </Box>
        {/* categories */}
        <Box>
          <Typography variant="body4" color="textBlack">
            Categories
          </Typography>
          <TextField
            id="outlined-select"
            select
            defaultValue="Bangladesh"
            sx={{
              border: 1,
              borderColor: "primary.main",
              width: "295px",
              borderRadius: "5px",
              mt: "10px",
            }}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        {/* file */}
        <Box>
          <Typography variant="body4" color="textBlack">
            Image
          </Typography>
          <TextField
            id="outlined-select"
            type="file"
            sx={{
              border: 1,
              borderColor: "primary.main",
              width: "295px",
              borderRadius: "5px",
              mt: "10px",
            }}
          ></TextField>
        </Box>
      </Box>
      {/* 1st selection end */}
      {/* 2nd selection start */}
      <Box sx={{ display: "flex", gap: "24px" }}>
        {/* news Type */}
        <Box>
          <Typography variant="body4" color="textBlack">
            News Type
          </Typography>
          <TextField
            id="outlined-select"
            select
            defaultValue="Top News"
            sx={{
              border: 1,
              borderColor: "primary.main",
              width: "295px",
              borderRadius: "5px",
              mt: "10px",
            }}
          >
            {newsType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        {/* status */}
        <Box>
          <Typography variant="body4" color="textBlack">
            Status
          </Typography>
          <TextField
            id="outlined-select"
            select
            defaultValue="Draft"
            sx={{
              border: 1,
              borderColor: "primary.main",
              width: "295px",
              borderRadius: "5px",
              mt: "10px",
            }}
          >
            {status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      {/* 2nd selection end */}
      <Button
        variant="button3"
        sx={{
          fontWeight: 600,
          fontSize: "16px",
          mt: "40px",
          display: pathname === "/news" ? "none" : "block",
        }}
      >
        Create
      </Button>
    </Box>
  );
};

export default CreateNews;
