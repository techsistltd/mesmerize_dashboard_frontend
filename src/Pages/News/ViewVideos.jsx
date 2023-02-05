import { Box } from "@mui/material";
import React from "react";
import DashboardTable from "../../Components/Dashboadrs/DashboardTable";
import ViewNewsStats from "../../Components/News/ViewNewsStats";

const ViewVideos = () => {
  return (
    <Box>
      <ViewNewsStats />
      <DashboardTable />
    </Box>
  );
};

export default ViewVideos;
