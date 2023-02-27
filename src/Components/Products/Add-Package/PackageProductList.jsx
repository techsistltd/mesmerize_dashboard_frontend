import {
  Avatar,
  Box,
  Button,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import DataTable from "../../Shared/DataTable";

const PackageProductList = () => {
  const { data: products = [], isLoading: productLoading } = useQuery([
    "/dashboard/products/",
  ]);

  const { control, handleSubmit, reset } = useForm();

  const getData = (data) => {
    console.log({ ...data });
    reset();
  };

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
    // { field: "order", headerName: "Order", flex: 1, minWidth: 100 },
    {
      field: "sold",
      headerName: "Sale",
      flex: 1,
      minWidth: 100,
      align: "center",
      headerAlign: "center",
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
      <Typography variant="body3" color={"textBlack"} sx={{ mt: "45px" }}>
        Product List
      </Typography>
      <Box
        onSubmit={handleSubmit(getData)}
        sx={{
          display: "flex",
          gap: "50px",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            "& .MuiTextField-root": {
              marginTop: 0,
            },
          }}
        >
          {/* categories */}
          <Box>
            <Controller
              name={"categories"}
              control={control}
              defaultValue=""
              render={({ field: { value, ...field } }) => (
                <TextField
                  variant="outlined"
                  select
                  value={Boolean(value) ? value : "default"}
                  {...field}
                  sx={{
                    border: 1,
                    borderColor: "primary.main",
                    width: "300px",
                    height: "40px",
                    borderRadius: "5px",
                    mt: "10px",
                    "& .MuiInputBase-input": {
                      padding: "8px",
                    },
                  }}
                >
                  <MenuItem value="default" disabled>
                    Category
                  </MenuItem>
                  {products.map((category) => (
                    <MenuItem key={category.slug} value={category.title}>
                      {category.title}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Box>
          {/* product id */}
          <Box>
            <Controller
              name={"prductId"}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  type={"text"}
                  variant="outlined"
                  {...field}
                  placeholder="Product ID"
                  sx={{
                    border: 1,
                    borderColor: "primary.main",
                    width: "300px",
                    height: "40px",
                    borderRadius: "5px",
                    mt: "10px",
                    "& .MuiInputBase-input": {
                      padding: "8px",
                    },
                  }}
                />
              )}
            />
          </Box>
          {/* productName */}
          <Box>
            <Controller
              name={"productName"}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="Product Name"
                  {...field}
                  sx={{
                    border: 1,
                    borderColor: "primary.main",
                    width: "300px",
                    borderRadius: "5px",
                    mt: "10px",
                    height: "40px",
                    "& .MuiInputBase-input": {
                      padding: "8px",
                    },
                  }}
                ></TextField>
              )}
            />
          </Box>
        </Box>
        {/* submit button */}
        <Button
          variant="button3"
          onClick={handleSubmit(getData)}
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            height: "40px",
            width: 1,
          }}
        >
          Search
        </Button>
      </Box>
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
    </Box>
  );
};

export default PackageProductList;
