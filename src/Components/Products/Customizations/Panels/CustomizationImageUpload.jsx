import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const CustomizationImageUpload = ({ setCustomizationImage = () => null }) => {
  return (
    <Box sx={{ width: 1 }}>
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          borderBottom: 1,
          pt: "35px",
          pb: "18px",
          fontWeight: 600,
          fontSize: "22px",
        }}
      >
        Upload Customization Image
      </Typography>
      <TextField
        type="file"
        onChange={(e) => setCustomizationImage(e.target.files[0])}
        sx={{
          mt: "30px",
          width: 1,
          border: "0.5px solid",
          borderColor: "primary.main",
          borderRadius: "5px",

          "& input": {
            padding: 0,
            height: "50px",

            "&::file-selector-button": {
              bgcolor: "rgba(0, 112, 152, 0.15)",
              height: "50px",
              width: "125px",
              border: 0,
              borderRight: 1,
              borderColor: "primary.main",
              mr: "20px",
            },
          },
        }}
      />
    </Box>
  );
};

export default CustomizationImageUpload;
