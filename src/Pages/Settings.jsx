import { Box, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import PasswordAndSecurity from "../Components/Setting/PasswordAndSecurity";
import { RxDashboard } from "react-icons/rx";
import { RiStarSLine } from "react-icons/ri";
import { MdPrivacyTip } from "react-icons/md";
import GeneralSetting from "../Components/Setting/GeneralSetting";
import ReviewSetting from "../Components/Setting/ReviewSetting";

const Settings = () => {
  const [selected, setSelected] = useState(0);

  const buttonData = [
    {
      text: "General",
      icon: RxDashboard,
      component: GeneralSetting,
    },
    {
      text: "Review",
      icon: RiStarSLine,
      component: ReviewSetting,
    },
    {
      text: "Privacy",
      icon: MdPrivacyTip,
      component: PasswordAndSecurity,
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "16pxx",
          backgroundColor: "color2.main",
          width: 1,
          mb: "30px",
        }}
      >
        {buttonData.map(({ text, icon: Icon }, idx) => {
          return (
            <Button
              key={idx}
              onClick={() => setSelected(idx)}
              variant="text"
              sx={{
                width: 1,
                height: "54px",
                fontSize: "16px",
                gap: "16px",
                fontWeight: 600,
                transition: ".50s ease",
                borderRadius: 0,
                backgroundColor: selected === idx ? "color3.main" : "unset",
                color: selected === idx ? "textWhite" : "unset",
                "&:hover": {
                  backgroundColor: selected === idx ? "color3.main" : "unset",
                  color: selected === idx ? "textWhite" : "unset",
                },
              }}
            >
              <Icon style={{ fontSize: "20px" }} />
              {text}
            </Button>
          );
        })}
      </Box>
      <Paper sx={{ padding: "45px" }}>
        {buttonData.map(({ component: Component }, idx) => {
          return Boolean(idx === selected) && <Component key={idx} />;
        })}
      </Paper>
    </Box>
  );
};

export default Settings;
