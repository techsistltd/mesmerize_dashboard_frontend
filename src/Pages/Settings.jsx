import { Paper } from "@mui/material";
import React from "react";
import PasswordAndSecurity from "../Components/Setting/PasswordAndSecurity";

const Settings = () => {
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
      <PasswordAndSecurity />
    </Paper>
  );
};

export default Settings;
