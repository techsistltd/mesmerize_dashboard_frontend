import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import DataTable from "../Shared/DataTable";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DeleteDialog from "../Shared/DeleteDialog";

const CategoriesListTable = ({ handleEdit }) => {
  const {
    data: categories = [],
    isLoading: productLoading,
    refetch,
  } = useQuery(["/dashboard/categories/"]);

  const [deleteId, setDeleteId] = useState(null);

  const tableColumn = [
    {
      field: "id",
      headerName: "Serial No",
      width: 150,
      renderCell: ({ value }) => (
        <Typography color={"textBlack"}>{value}</Typography>
      ),
    },
    {
      field: "thumbnail",
      headerName: "Image",
      width: 250,
      renderCell: ({ value }) => {
        return (
          <Avatar
            variant="rounded"
            src={value}
            sx={{ height: "60px", width: "60px" }}
          />
        );
      },
    },
    {
      field: "title",
      headerName: "Category",
      flex: 1,
      minWidth: 100,
    },

    {
      field: "created_at",
      headerName: "Date",
      width: 200,
      valueFormatter: ({ value }) => moment(value).format("ll"),
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 220,
      getActions: ({ row }) => {
        return [
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
              onClick={() => handleEdit(row)}
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
        rows={categories}
        isLoading={productLoading}
      />
      <DeleteDialog
        open={Boolean(deleteId)}
        handleClose={() => setDeleteId(null)}
        successRefetch={refetch}
        deleteURL={`/dashboard/categories/${deleteId}/`}
      />
    </Box>
  );
};

export default CategoriesListTable;
