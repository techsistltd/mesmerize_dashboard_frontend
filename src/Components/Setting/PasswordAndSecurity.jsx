import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import TitleUnderLine from "./TitleUnderLine";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { AiFillEyeInvisible } from "react-icons/ai";

const PasswordAndSecurity = () => {
  const [selectedType, setSelectedType] = useState("change");
  return (
    <Box>
      <TitleUnderLine title="Password & Security" underline />
      <Typography variant="body4" component={"p"} color="textTan">
        All password settings and security option.
      </Typography>
      {/* radio button */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        sx={{ my: "30px" }}
      >
        <FormControlLabel
          value="change"
          control={<Radio color="color15" />}
          label="Change Password"
        />
        <FormControlLabel
          value="forget"
          control={<Radio color="color15" />}
          label="Forgot Password"
        />
      </RadioGroup>

      {/* radio button end */}
      <Grid container columnSpacing={"25px"}>
        {Boolean(selectedType === "change") ? (
          <Fragment>
            {/* change password  */}
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
            {/* change password end */}
          </Fragment>
        ) : (
          <Fragment>
            {/* forget password */}
            <Grid item xs={5}>
              <Typography variant="body4" color="textBlack">
                Please Enter Your Registered Email
              </Typography>
              <TextField
                fullWidth
                type={"text"}
                id="outlined-basic"
                variant="outlined"
                placeholder="Enter Your Mail "
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
                Send
              </Button>
            </Grid>
            {/* forget password end */}
          </Fragment>
        )}
      </Grid>
    </Box>
  );
};

export default PasswordAndSecurity;
