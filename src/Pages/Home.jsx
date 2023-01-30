import { Box } from "@mui/material";
import React, { Fragment } from "react";
import DashboardStats from "../Components/Dashboadrs/DashboardStats";
import DashboardTable from "../Components/Dashboadrs/DashboardTable";

const Home = () => {
  const statsData = [
    {
      title: "Total Content",
      count: "150",
    },
    {
      title: "Total Published",
      count: "70",
    },
    {
      title: "Today View",
      count: "180",
    },
    {
      title: "Total Comment",
      count: "170",
    },
  ];
  return (
    <Fragment>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "40px" }}
      >
        {statsData.map(({ title, count }, idx) => {
          return <DashboardStats key={idx} title={title} count={count} />;
        })}
      </Box>
      <DashboardTable />
    </Fragment>
  );
};

export default Home;
