import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";
import DashboardStats from "../Components/Dashboadrs/DashboardStats";
import { useNavigate } from "react-router-dom";
import SearchField from "../Components/Shared/SearchField";
import DataTable from "../Components/Shared/DataTable";

const Home = () => {
  const navigate = useNavigate();

  const statsData = [
    {
      title: "Total Products",
      count: "150",
    },
    {
      title: "Total Orders",
      count: "70",
    },
    {
      title: "Confirmed Orders",
      count: "180",
    },
    {
      title: "Delivered Order",
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body4">Best Selling Products</Typography>
        <SearchField borderVariant />
      </Box>
      <DataTable />
    </Fragment>
  );
};

export default Home;
