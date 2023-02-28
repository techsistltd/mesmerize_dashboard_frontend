import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import {
  AiOutlineAlignLeft,
  AiOutlineBold,
  AiOutlineUnderline,
} from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsTypeItalic } from "react-icons/bs";

const ViewProductDetails = ({ product }) => {
  return (
    <Box>
      <Paper sx={{ padding: "45px", mt: "25px" }}>
        <Box>
          <Typography
            variant="body4"
            sx={{
              position: "relative",
              mb: "30px",
              "&:after": {
                content: `""`,
                position: "absolute",
                width: "72px",
                height: "2px",
                bgcolor: "textBlack",
                bottom: "-10px",
                left: 0,
                mx: "auto",
              },
            }}
          >
            Product Discription
          </Typography>
          <Typography
            variant="body4"
            color="textBlack"
            sx={{
              height: "200px",
              width: 1,
              border: 1,
              borderRadius: "5px",
              padding: "11px",
            }}
          >
            dasdad
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ViewProductDetails;
