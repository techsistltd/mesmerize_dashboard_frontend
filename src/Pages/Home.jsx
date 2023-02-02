import { Box, Button, Typography } from "@mui/material";
import React, { Fragment } from "react";
import DashboardStats from "../Components/Dashboadrs/DashboardStats";
import DashboardTable from "../Components/Dashboadrs/DashboardTable";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body4">News List</Typography>
        <Button
          onClick={() => navigate("/news/add")}
          variant="button3"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px",
          }}
        >
          <IoIosAddCircleOutline style={{ padding: 0, fontSize: "20px" }} /> Add
          Post
        </Button>
      </Box>
      <DashboardTable />
    </Fragment>
  );
};

export default Home;
