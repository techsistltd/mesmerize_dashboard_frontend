import { Avatar, Box, Chip, Tooltip, Typography } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { renderOrderStatusColor } from "../../Utils/styleHelpers";
import DataTable from "../Shared/DataTable";

const OrdersTable = ({ filters = {} }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const activeFilters = Object.entries(filters)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const {
    data: { data: orders = [], count = 0 } = {},
    isLoading: ordersLoading,
    refetch,
  } = useQuery([
    `/dashboard/orders/?page=${page}&size=${pageSize}&${activeFilters}`,
    page,
    pageSize,
    activeFilters,
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
      field: "customer",
      headerName: "Customer Name",
      flex: 1,
      minWidth: 220,
      renderCell: ({ value }) => {
        return (
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              width: 1,
              alignItems: "center",
            }}
          >
            <Avatar
              variant="circular"
              src={value?.profile_pic}
              alt={value?.full_name}
              sx={{ height: "50px", width: "50px" }}
            />
            <Typography variant="body6" sx={{ whiteSpace: "break-spaces" }}>
              {value?.full_name}
            </Typography>
          </Box>
        );
      },
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
      field: "status",
      headerName: "Status",
      align: "center",
      headerAlign: "center",
      flex: 1,
      minWidth: 120,
      renderCell: ({ value }) => (
        <Box
          sx={{
            "& .MuiChip-root": {
              borderRadius: "6px",
            },
            "& .MuiChip-label": {
              color: "textWhite",
              textTransform: "capitalize",
            },
          }}
        >
          <Chip
            label={value?.toLowerCase()}
            sx={{ bgcolor: renderOrderStatusColor(value) }}
          />
        </Box>
      ),
    },
    {
      field: "order_items",
      headerName: "Total Item",
      flex: 1,
      width: 120,
      align: "center",
      headerAlign: "center",
      renderCell: ({ value }) => (
        <Typography color={"textBlack"}>{value?.length ?? 0}</Typography>
      ),
    },
    {
      field: "grand_total",
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
              //    onClick={() => navigate(`/products/${row?.slug}`)}
            />
          </Tooltip>,
        ];
      },
    },
  ];

  return (
    <Box sx={{ mt: "40px" }}>
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
          rows={orders}
          isLoading={ordersLoading}
          paginationMode="server"
          rowCount={count}
          pageSize={pageSize}
          onPageSizeChange={(size) => setPageSize(size)}
          onPageChange={(page) => setPage(page + 1)}
        />
      </Box>
    </Box>
  );
};

export default OrdersTable;
