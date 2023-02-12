import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { status } from "../../data/AddNewsData";
import youtubeThum from "../../Assets/youtubeThum.png";

const CreateVideos = () => {
  const [addVideo, setAddVideo] = useState("");
  return (
    <Grid container columnSpacing={"24px"} rowGap={"40px"}>
      {Boolean(addVideo) ? (
        // Thumb image preview
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <ReactPlayer controls url={addVideo} />
        </Grid>
      ) : (
        // youtube video preview
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component={"img"}
            src={youtubeThum}
            sx={{ width: "640px", height: "360px" }}
          />
        </Grid>
      )}
      {/* input feild start */}
      <Grid item xs={8}>
        <Typography variant="body4" color="textBlack">
          URL
        </Typography>
        <TextField
          required
          onChange={(e) => setAddVideo(e.target.value)}
          fullWidth
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter your URL "
          sx={{
            border: 1,
            borderColor: "primary.main",
            height: "40px",
            borderRadius: "5px",
            mt: "10px",
            "& .MuiInputBase-input": {
              padding: "8px",
            },
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body4" color="textBlack">
          Status
        </Typography>
        <TextField
          fullWidth
          id="outlined-select"
          select
          defaultValue="Draft"
          sx={{
            border: 1,
            borderColor: "primary.main",
            borderRadius: "5px",
            mt: "10px",
            height: "40px",
            "& .MuiInputBase-input": {
              padding: "8px",
            },
          }}
        >
          {status.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      {/* ------end------ */}
      <Grid item xs={12}>
        <Button variant="button3" sx={{ fontSize: "16px", fontWeight: 600 }}>
          Create
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateVideos;
