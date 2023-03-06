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
          border: "0.2px solid",
          borderRadius: "5px",
          input: {
            fontSize: "13px",
            fontWeight: 400,
            height: "unset",
            padding: "unset",
            "&::file-selector-button": {
              paddingY: "10px",
              width: "110px",
              // borderRadius: "5px",
              border: 0,
              borderRight: 1,
            },
          },
        }}
      />
    </Box>
  );
};

export default CustomizationImageUpload;
