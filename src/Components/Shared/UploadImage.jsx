import { Box, Button, Grid } from "@mui/material";
import React from "react";
import cloudUpload from "../../Assets/cloudUpload.png";
import { useState } from "react";

const UploadImage = () => {
  const [files, setFiles] = useState([]);

  const handleFileAdd = (newFile) => {
    if (Boolean(newFile)) {
      setFiles((files) => {
        return [newFile, ...files];
      });
    }
  };
  return (
    <Grid container columnGap={"30px"} rowGap={"30px"}>
      {files?.map((file, index) => (
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            kay={index}
            component="img"
            src={URL.createObjectURL(file)}
            sx={{
              height: "99px",
              width: "109px",
              borderRadius: "5px",
              boxShadow: "0px 1px 4px",
              bgcolor: "#FCFCFC",
            }}
          />
        </Grid>
      ))}
      <Grid
        item
        xs={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          component="label"
          disableRipple
          // disabled={files.length >= 5}
          sx={{
            boxShadow: "0px 1px 4px",
            bgcolor: "#FCFCFC",
            padding: "24px",
            "&:hover": {
              bgcolor: "#FCFCFC",
            },
          }}
        >
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => handleFileAdd(e.target.files[0])}
          />
          <Box component="img" src={cloudUpload} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default UploadImage;
