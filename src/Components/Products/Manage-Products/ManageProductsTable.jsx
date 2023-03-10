import { Avatar, Box, Chip, Tooltip, Typography } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { renderStatusColor } from "../../../Utils/styleHelpers";
import DataTable from "../../Shared/DataTable";
import DeleteDialog from "../../Shared/DeleteDialog";

const ManageProductsTable = ({ filters = {} }) => {
  const navigate = useNavigate();
  const [deleteId, setDeleteId] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const activeFilters = Object.entries(filters)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const {
    data: { data: products = [], count = 0 } = {},
    isLoading: productLoading,
    refetch,
  } = useQuery(
    [
      `/dashboard/products/?page=${page}&size=${pageSize}&${activeFilters}`,
      page,
      pageSize,
      activeFilters,
    ],
    {
      cacheTime: 0,
      onSuccess: () => {},
    }
  );

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
              onClick={() => setDeleteId(row?.slug)}
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
          paginationMode="server"
          rowCount={count}
          pageSize={pageSize}
          onPageSizeChange={(size) => setPageSize(size)}
          onPageChange={(page) => setPage(page + 1)}
        />
      </Box>
      <DeleteDialog
        open={Boolean(deleteId)}
        handleClose={() => setDeleteId(null)}
        successRefetch={refetch}
        deleteURL={`/dashboard/products/${deleteId}/`}
      />
    </Box>
  );
};

export default ManageProductsTable;
