import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import DashboardTable from "../../Components/Dashboadrs/DashboardTable";
import EditNews from "../../Components/News/EditNews";
import ViewNewsPost from "../../Components/News/ViewNewsPost";
import ViewNewsStats from "../../Components/News/ViewNewsStats";

const ViewNews = () => {
  const [viewNewsPost, setViewNewsPost] = useState(null);
  const [editNews, setEditNews] = useState(null);
  return Boolean(viewNewsPost) ? (
    <Paper sx={{ display: "flex", justifyContent: "center", py: "25px" }}>
      <ViewNewsPost setViewNewsPost={setViewNewsPost} />
    </Paper>
  ) : (
      <Box>
        <ViewNewsStats />
        <DashboardTable
          setViewNewsPost={setViewNewsPost}
          setEditNews={setEditNews}
        />
      </Box>
    ) && editNews ? (
    <Paper sx={{ display: "flex", justifyContent: "center", py: "25px" }}>
      <EditNews setEditNews={setEditNews} />
    </Paper>
  ) : (
    <Box>
      <ViewNewsStats />
      <DashboardTable
        setViewNewsPost={setViewNewsPost}
        setEditNews={setEditNews}
      />
    </Box>
  );
};

export default ViewNews;
