import { Avatar, Box, Button, Tooltip, Typography } from "@mui/material";
import React, { Fragment } from "react";
import DashboardStats from "../Components/Dashboadrs/DashboardStats";
import SearchField from "../Components/Shared/SearchField";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import DataTable from "../Components/Shared/DataTable";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { GridActionsCellItem } from "@mui/x-data-grid";

const Home = () => {
  const { data: products = [], isLoading: productLoading } = useQuery([
    "/mesmerize/best-selling-products/",
  ]);

  const tableColumn = [
    {
      field: "id",
      headerName: "ID",
      Width: 100,
      renderCell: ({ value }) => (
        <Typography color={"textBlack"}>#{value}</Typography>
      ),
    },
    {
      field: "title",
      headerName: "Product",
      flex: 1,
      minWidth: 250,
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: "flex", gap: "12px", width: 1 }}>
            <Avatar
              variant="rounded"
              src={row?.thumbnail}
              alt={row.title}
              sx={{ height: "50px", width: "50px" }}
            />
            <Typography variant="body6" sx={{ whiteSpace: "break-spaces" }}>
              {row?.title}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      width: 130,
      valueGetter: ({ value }) => value?.title,
    },
    {
      field: "sub_category",
      headerName: "Sub Category",
      flex: 1,
      minWidth: 130,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      minWidth: 100,
      align: "center",
      headerAlign: "center",
      renderCell: ({ value }) => (
        <Box sx={{ display: "flex", alignItems: "end" }}>
          <Box
            component={TbCurrencyTaka}
            sx={{
              color: "primary.main",
              fontSize: "21px",
            }}
          />
          {value}
        </Box>
      ),
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
      minWidth: 100,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "rating",
      headerName: "Rating",
      align: "center",
      headerAlign: "center",
      flex: 1,
      minWidth: 100,
      renderCell: ({ value }) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
          <Box
            component={AiFillStar}
            sx={{ color: "primary.main", fontSize: "15px" }}
          />
          {value}
        </Box>
      ),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 120,
      getActions: ({ row }) => {
        return [
          <Tooltip title="View" placement="top">
            <GridActionsCellItem
              icon={
                <Box
                  component={AiOutlineEye}
                  sx={{
                    fontSize: "15px",
                    color: "textBlack",
                  }}
                />
              }
              label="View"
              onClick={() => console.log(row)}
            />
          </Tooltip>,
          <Tooltip title="Edit" placement="top">
            <GridActionsCellItem
              icon={
                <Box
                  component={FaPen}
                  sx={{
                    fontSize: "15px",
                    color: "textBlack",
                  }}
                />
              }
              label="Edit"
              onClick={() => console.log(row)}
            />
          </Tooltip>,
          <Tooltip title="Delete" placement="top">
            <GridActionsCellItem
              icon={
                <Box
                  component={MdDelete}
                  sx={{
                    fontSize: "15px",
                    color: "textBlack",
                  }}
                />
              }
              label="Delete"
              onClick={() => console.log(row)}
            />
          </Tooltip>,
        ];
      },
    },
    // { field: "order", headerName: "Order", flex: 1, minWidth: 100 },
    // { field: "sale", headerName: "Sale", flex: 1, minWidth: 100 },
  ];

  const statsData = [
    {
      title: "Total Products",
      count: products.length,
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
      <DataTable
        columns={tableColumn}
        rows={products}
        isLoading={productLoading}
      />
    </Fragment>
  );
};

export default Home;
