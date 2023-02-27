import { Avatar, Box, Chip, Tooltip, Typography } from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DataTable from "../../Shared/DataTable";

const ArchiveProducts = () => {
  const tableColumn = [
    {
      field: "",
      headerName: "ID",
      Width: 100,
      renderCell: ({ value }) => (
        <Typography color={"textBlack"}>#{value}</Typography>
      ),
    },
    {
      field: "",
      headerName: "Package Name",
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
      field: "",
      headerName: "Quantity",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "",
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
      field: "",
      headerName: "Stock",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "",
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
  ];

  return (
    <Box>
      <Typography variant="body3" color={"textBlack"}>
        Archive Package List
      </Typography>
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
        //   columns={tableColumn}
        //   rows={products}
        //   isLoading={productLoading}
        />
      </Box>
      {/* data table end */}
    </Box>
  );
};

export default ArchiveProducts;
