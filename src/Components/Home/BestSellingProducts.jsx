import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import DataTable from "../Shared/DataTable";
import DeleteDialog from "../Shared/DeleteDialog";
import SearchField from "../Shared/SearchField";

const BestSellingProducts = () => {
  const navigate = useNavigate();

  const {
    data: products = [],
    isLoading: productLoading,
    refetch,
  } = useQuery(["/dashboard/best-selling-products/"]);

  const [deleteId, setDeleteId] = useState(null);

  const { data: { summary = {} } = {} } = useQuery(["/dashboard/summary/"]);

  const statsData = [
    {
      title: "Total Products",
      count: summary?.total_products ?? 0,
    },
    {
      title: "Total Orders",
      count: summary?.total_order ?? 0,
    },
    {
      title: "Confirmed Orders",
      count: summary?.confirmed_orders ?? 0,
    },
    {
      title: "Delivered Order",
      count: summary?.delivered_orders ?? 0,
    },
  ];

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
      minWidth: 220,
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
      width: 120,
      valueGetter: ({ value }) => value?.title,
    },
    {
      field: "sub_category",
      headerName: "Sub Category",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      minWidth: 120,
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
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "rating",
      headerName: "Rating",
      align: "center",
      headerAlign: "center",
      flex: 1,
      minWidth: 120,
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
      width: 150,
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
              onClick={() => navigate(`/products/${row?.slug}`)}
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
              onClick={() => navigate(`/products/${row?.slug}/edit`)}
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
              onClick={() => setDeleteId(row?.slug)}
            />
          </Tooltip>,
        ];
      },
    },
    // { field: "order", headerName: "Order", flex: 1, minWidth: 100 },
    // { field: "sale", headerName: "Sale", flex: 1, minWidth: 100 },
  ];

  return (
    <Box>
      {/* dashboard stats */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "40px" }}
      >
        {statsData.map(({ title, count }, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px",
                width: "226px",
                height: "130px",
                borderRadius: "10px",
                backgroundColor: "color2.main",
                color: "textBlack",
                "&:hover": {
                  backgroundColor: "color3.main",
                  color: "textWhite",
                  transition: ".3s ease",
                },
              }}
            >
              <Typography variant="body4">{title}</Typography>
              <Typography
                sx={{ fontSize: "22px", fontWeight: 700, lineHeight: "33px" }}
              >
                {count}
              </Typography>
            </Box>
          );
        })}
      </Box>
      {/* dashboard stats end */}

      {/* typography and search field */}
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
      {/* typography and search field end */}

      {/* data table */}
      <Box
        sx={{
          "& .MuiDataGrid-virtualScrollerContent": {
            padding: "0 15px 0 15px",
          },
          "& .MuiDataGrid-columnHeaders": {
            padding: "0 15px 0 15px",
          },
        }}
      >
        <DataTable
          columns={tableColumn}
          rows={products}
          isLoading={productLoading}
        />
      </Box>
      {/* data table end */}
      {/* delete product */}
      <DeleteDialog
        open={Boolean(deleteId)}
        handleClose={() => setDeleteId(null)}
        successRefetch={refetch}
        deleteURL={`/dashboard/products/${deleteId}/`}
      />
    </Box>
  );
};

export default BestSellingProducts;
