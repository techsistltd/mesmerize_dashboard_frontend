import { Box, Button, Collapse, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const EpaperUpload = ({ date }) => {
  const [uploadFormOpen, setUploadFormOpen] = useState(false);
  return (
    <Box>
      <Typography
        variant="body3"
        component="div"
        sx={{
          color: "textBlack",
          mb: "30px",
          position: "relative",

          "&:after": {
            content: `""`,
            position: "absolute",
            width: "63px",
            height: "2px",
            bgcolor: "#0B0B0B !important",
            bottom: "-8px",
            left: 0,
          },
        }}
      >
        Page Upload
      </Typography>

      <Collapse in={Boolean(uploadFormOpen)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "10px",
          }}
        >
          <Typography variant="body3">Page Number</Typography>
          <TextField
            size="small"
            type="number"
            inputProps={{ min: 1 }}
            placeholder="Enter page number"
            sx={{
              border: 1,
              borderRadius: "5px",
              minWidth: "454px",
            }}
          />
          <Typography variant="body3">Page Image Source</Typography>
          <TextField
            size="small"
            type="file"
            inputProps={{ min: 1 }}
            sx={{
              border: 1,
              minWidth: "454px",
              borderRadius: "5px",
              "& ::file-selector-button": {
                display: "none",
              },
            }}
          />
          <Button
            variant="button3"
            sx={{ minWidth: "155px", mt: "15px" }}
            onClick={() => setUploadFormOpen(false)}
          >
            Upload Page
          </Button>
        </Box>
      </Collapse>

      <Collapse in={!Boolean(uploadFormOpen)}>
        <Button variant="button3" onClick={() => setUploadFormOpen(true)}>
          Add new page
        </Button>
      </Collapse>
    </Box>
  );
};

export default EpaperUpload;
