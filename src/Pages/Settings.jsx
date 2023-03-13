import {
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ChangePassword from "../Components/Setting/ChangePassword";
import ForgetPassword from "../Components/Setting/ForgetPassword";
import TitleUnderLine from "../Components/Setting/TitleUnderLine";

const Settings = () => {
  const [selectedType, setSelectedType] = useState("change");
  // const [selected, setSelected] = useState(0);

  // const buttonData = [
  //   {
  //     text: "General",
  //     icon: RxDashboard,
  //     component: GeneralSetting,
  //   },
  //   {
  //     text: "Review",
  //     icon: RiStarSLine,
  //     component: ReviewSetting,
  //   },
  //   {
  //     text: "Privacy",
  //     icon: MdPrivacyTip,
  //     component: PasswordAndSecurity,
  //   },
  // ];

  return (
    // {buttonData.map(({ component: Component }, idx) => {
    //   return Boolean(idx === selected) && <Component key={idx} />;
    // })}

    <Paper sx={{ padding: "45px" }}>
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

      {Boolean(selectedType === "change") ? (
        <ChangePassword />
      ) : (
        <ForgetPassword />
      )}
      {/* <PasswordAndSecurity /> */}
    </Paper>
  );
};

export default Settings;
