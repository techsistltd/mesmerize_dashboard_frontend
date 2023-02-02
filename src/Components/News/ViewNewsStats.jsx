import { Box, Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { categories } from "../../data/AddNewsData";

const ViewNewsStats = () => {
  const [selected, setSelected] = useState(0);
  const buttonData = [
    {
      text: "All",
    },
    {
      text: "Draft(1)",
    },
    {
      text: "Archive(1)",
    },
  ];
  return (
    <Box>
      {/* all news stats section */}
      <Box
        sx={{
          backgroundColor: "color2.main",
          width: "660px",
        }}
      >
        {buttonData.map(({ text }, idx) => {
          return (
            <Button
              key={idx}
              onClick={() => setSelected(idx)}
              variant="text"
              sx={{
                width: "220px",
                height: "54px",
                fontWeight: 600,
                transition: ".50s ease",
                borderRadius: 0,
                backgroundColor: selected === idx ? "color3.main" : "unset",
                color: selected === idx ? "textWhite" : "unset",
                "&:hover": {
                  backgroundColor: selected === idx ? "color3.main" : "unset",
                  color: selected === idx ? "textWhite" : "unset",
                },
              }}
            >
              {text}
            </Button>
          );
        })}
      </Box>
      {/* -----End----- */}
      {/* search feild */}
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "20px", my: "40px" }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="ID "
          sx={{
            border: 1,
            borderColor: "primary.main",
            width: "300px",
            height: "35px",
            borderRadius: "5px",
            "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
              padding: "5px 10px",
            },
          }}
        />
        <TextField
          id="outlined-select"
          select
          defaultValue="Bangladesh"
          sx={{
            border: 1,
            borderColor: "primary.main",
            width: "300px",
            height: "35px",
            borderRadius: "5px",
            "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
              {
                padding: "5px 10px",
              },
          }}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="button3"
          sx={{ fontWeight: 600, fontSize: "16px", height: "35px" }}
        >
          Search
        </Button>
      </Box>
      {/* search field end */}
    </Box>
  );
};

export default ViewNewsStats;
