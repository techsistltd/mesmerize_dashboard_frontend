import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import TitleUnderLine from "./TitleUnderLine";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { AiFillEyeInvisible } from "react-icons/ai";

const PasswordAndSecurity = () => {
  return (
    <Box>
      <TitleUnderLine title="Password & Security" underline />
      <Typography variant="body4" component={"p"} color="textTan">
        All password settings and security option.
      </Typography>
      {/* radio button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          my: "30px",
        }}
      >
        {/* button 1 */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Checkbox
            sx={{ padding: 0 }}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={
              <RadioButtonCheckedIcon sx={{ color: "color15.main" }} />
            }
          />
          <Typography>Change Password</Typography>
        </Box>
        {/* button 1 end */}
        {/* button 2 */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Checkbox
            sx={{ padding: 0 }}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={
              <RadioButtonCheckedIcon sx={{ color: "color15.main" }} />
            }
          />
          <Typography>Forgot Password</Typography>
        </Box>
        {/* button 2 end */}
      </Box>
      {/* radio button end */}
      <Grid container columnSpacing={"25px"}>
        <Grid item xs={3.5}>
          <Typography variant="body4" color="textBlack">
            Old password
          </Typography>
          <TextField
            fullWidth
            type={"password"}
            id="outlined-basic"
            variant="outlined"
            placeholder="**************"
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
        <Grid item xs={3.5}>
          <Typography variant="body4" color="textBlack">
            New password
          </Typography>
          <TextField
            fullWidth
            type={"password"}
            id="outlined-basic"
            variant="outlined"
            placeholder="**************"
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
        <Grid item xs={3.5}>
          <Typography variant="body4" color="textBlack">
            Confirm New password
          </Typography>
          <TextField
            fullWidth
            type={"password"}
            id="outlined-basic"
            variant="outlined"
            placeholder="**************"
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
        <Grid item xs={1.5} sx={{ display: "flex", alignItems: "end" }}>
          <Button variant="button3" sx={{ height: "40px" }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PasswordAndSecurity;
