import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import DataTable from "../../Shared/DataTable";

const ManagePackageTable = () => {
  const navigate = useNavigate();

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
      field: "package-name",
      headerName: "Package Name",
      flex: 1,
      minWidth: 220,
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              width: 1,
            }}
          >
            <Avatar
              variant="rounded"
              src={row?.thumbnail}
              alt={row.title}
              sx={{
                height: "50px",
                width: "50px",
              }}
            />
            <Typography
              variant="body6"
              sx={{
                whiteSpace: "break-spaces",
              }}
            >
              {row?.title}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      width: 120,
      valueGetter: ({ value }) => value?.title,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      minWidth: 120,
      align: "center",
      headerAlign: "center",
      renderCell: ({ value }) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
          }}
        >
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
      field: "is_active",
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
            <Chip
              label="Active"
              sx={{
                bgcolor: "#67A13E",
              }}
            />
          ) : (
            <Chip
              label="Inactive"
              sx={{
                bgcolor: "#EA5046",
              }}
            />
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
          <GridActionsCellItem
            icon={
              <Tooltip title="View" placement="top">
                <Box
                  component={AiOutlineEye}
                  sx={{
                    fontSize: "15px",
                    color: "textBlack",
                  }}
                />
              </Tooltip>
            }
            label="View"
            onClick={() => console.log(row)}
          />,
          <GridActionsCellItem
            icon={
              <Tooltip title="Edit" placement="top">
                <Box
                  component={FaPen}
                  sx={{
                    fontSize: "15px",
                    color: "textBlack",
                  }}
                />
              </Tooltip>
            }
            label="Edit"
            onClick={() => console.log(row)}
          />,
          <GridActionsCellItem
            icon={
              <Tooltip title="Delete" placement="top">
                <Box
                  component={MdDelete}
                  sx={{
                    fontSize: "15px",
                    color: "textBlack",
                  }}
                />
              </Tooltip>
            }
            label="Delete"
            onClick={() => console.log(row)}
          />,
        ];
      },
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body3">Package List</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <Button
            onClick={() => navigate("/manage-package/add-package")}
            variant="button3"
            sx={{
              gap: "10px",
            }}
          >
            <AiOutlinePlus />
            Add New Package
          </Button>
          <Button
            onClick={() => navigate("/manage-package/archive")}
            variant="button4"
            sx={{
              color: "textWhite",
            }}
          >
            Archive
          </Button>
        </Box>
      </Box>
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
          columns={tableColumn} // rows={""}
          //    isLoading={productLoading}
        />
      </Box>
    </Box>
  );
};

export default ManagePackageTable;
