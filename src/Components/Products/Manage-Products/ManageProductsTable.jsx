import { Avatar, Box, Chip, Tooltip, Typography } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { renderStatusColor } from "../../../Utils/styleHelpers";
import DataTable from "../../Shared/DataTable";

const ManageProductsTable = () => {
  const navigate = useNavigate();

  const { data: { data: products = [] } = {}, isLoading: productLoading } =
    useQuery(["/dashboard/products/"]);

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
            sx={{ bgcolor: renderStatusColor(value) }}
          />
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
              onClick={() => console.log(row)}
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
          rows={products}
          isLoading={productLoading}
        />
      </Box>
    </Box>
  );
};

export default ManageProductsTable;
