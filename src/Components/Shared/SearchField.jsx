import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const SearchField = ({ borderVariant, ...props }) => {
  return (
    <TextField
      placeholder="Search…"
      sx={{
        border: Boolean(borderVariant) ? 1 : 0,
        borderRadius: "10px",
        "& input": {
          padding: "8px",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default SearchField;
