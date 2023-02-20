import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DataTable from "../Shared/DataTable";
import SearchField from "../Shared/SearchField";

const ResgisteredCustomers = () => {
  const navigate = useNavigate();
  const { data: customers = [], isLoading: productLoading } = useQuery([
    "/account/customers/",
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
      field: "full_name",
      headerName: "Customer Name",
      flex: 1,
      minWidth: 200,
      renderCell: ({ row }) => {
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
              src={row?.profile_pic}
              sx={{ height: "40px", width: "40px" }}
            />
            <Typography variant="body6" sx={{ whiteSpace: "break-spaces" }}>
              {row?.full_name}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      width: 200,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 200,
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
              onClick={() => navigate(`/customers/customer-profile/${row?.id}`)}
            />
          </Tooltip>,
        ];
      },
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body4">Registered Customer</Typography>
        <SearchField borderVariant />
      </Box>
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
          rows={customers}
          isLoading={productLoading}
        />
      </Box>
    </Box>
  );
};

export default ResgisteredCustomers;
