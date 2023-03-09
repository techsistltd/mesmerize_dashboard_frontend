import { Box, Grid } from "@mui/material";
import React from "react";
import TitleUnderLine from "./TitleUnderLine";

const GeneralSetting = () => {
  return (
    <Box>
      <TitleUnderLine title="General Information" underline />
      <Grid container>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  );
};

export default GeneralSetting;
