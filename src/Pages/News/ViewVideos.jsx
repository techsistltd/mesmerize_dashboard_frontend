import { Box } from "@mui/material";
import React from "react";
import ViewNewsStats from "../../Components/News/ViewNewsStats";
import DataTable from "../../Components/Shared/DataTable";

const ViewVideos = () => {
  return (
    <Box>
      <ViewNewsStats />
      <DataTable />
    </Box>
  );
};

export default ViewVideos;
