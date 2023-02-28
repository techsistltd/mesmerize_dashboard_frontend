import { Box, Typography, Avatar, Tooltip, Button, Chip } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import DataTable from "../Shared/DataTable";
import SearchField from "../Shared/SearchField";
import { AiOutlineEye } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { GridActionsCellItem } from "@mui/x-data-grid";
import moment from "moment/moment";

const OrderOverview = () => {
  const { data: orders = [], isLoading: productLoading } = useQuery([
    "/dashboard/orders/",
  ]);
  console.log(orders);
  // -------end------
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
      field: "customer",
      headerName: "Customer Name",
      flex: 1,
      minWidth: 220,
      renderCell: ({ value }) => {
        return (
          <Box
            sx={{
              display: "flex",
              gap: "14px",
              width: 1,
              alignItems: "center",
            }}
          >
            <Avatar
              variant="circular"
              src={value?.profile_pic}
              sx={{ height: "40px", width: "40px" }}
            />
            <Typography variant="body6" sx={{ whiteSpace: "break-spaces" }}>
              {value?.full_name}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      width: 120,
      renderCell: ({ value }) => (
        <Box
          sx={{
            "& .MuiChip-root": {
              borderRadius: "6px",
            },
            "& .MuiChip-label": {
              color: "textWhite",
            },
          }}
        >
          {Boolean(value) ? (
            <Chip label="Active" sx={{ bgcolor: "#67A13E" }} />
          ) : (
            <Chip label="Inactive" sx={{ bgcolor: "#EA5046" }} />
          )}
        </Box>
      ),
    },
    {
      field: "created_at",
      headerName: "Date",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
      valueFormatter: ({ value }) => moment(value).format("ll"),
    },
    {
      field: "grand_total",
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
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 180,
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
        ];
      },
    },
  ];

  const orderOverviewData = [
    {
      title: "Pending",
      count: "547",
    },
    {
      title: "Shipped",
      count: "247",
    },
    {
      title: "Delivered",
      count: "447",
    },
    {
      title: "Cancelled",
      count: "447",
    },
  ];

  return (
    <Box>
      {/* order view box */}
      <Box>
        <Typography variant="body3" color={"textBlack"}>
          Orders Overview
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: "45px",
            mt: "20px",
          }}
        >
          {orderOverviewData.map(({ title, count }, idx) => {
            return (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px",
                  width: "238px",
                  height: "93px",
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
                <Typography
                  variant="body4"
                  sx={{
                    borderBottom: "2px solid",
                    width: "66px",
                    height: "35px",
                    "&:hover": {
                      borderColor: "white",
                    },
                  }}
                >
                  {title}
                </Typography>
                <Typography variant="body4">{count}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      {/* order view box end */}

      {/* typography and search */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body4">Recent Order</Typography>
        <SearchField borderVariant />
      </Box>
      {/* typography and search end */}
      <Box
        sx={{
          "& .MuiDataGrid-virtualScrollerContent": {
            padding: "0 25px 0 25px",
          },
          "& .MuiDataGrid-columnHeaders": {
            padding: "0 25px 0 25px",
          },
        }}
      >
        <DataTable
          columns={tableColumn}
          rows={orders}
          isLoading={productLoading}
        />
      </Box>
    </Box>
  );
};

export default OrderOverview;
