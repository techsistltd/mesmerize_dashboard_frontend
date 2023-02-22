import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { useParams } from "react-router-dom";
import DataTable from "../Shared/DataTable";

const UserProfile = () => {
  const { userId } = useParams();
  const { data: userOrders = {}, isLoading: productLoading } = useQuery([
    `/dashboard/user-orders/?user=${userId}`,
  ]);

  console.log(userOrders);

  const renderButton = (type) => {
    switch (type) {
      case "DELIVERED":
        return (
          <Button variant="button1" sx={{ color: "textWhite" }}>
            Completed
          </Button>
        );
        break;
      case "PREPARING":
        return (
          <Button variant="button4" sx={{ color: "textWhite" }}>
            Preparing
          </Button>
        );
        break;
      case "PICKED":
        return (
          <Button variant="button5" sx={{ color: "textWhite" }}>
            Picked Up
          </Button>
        );
        break;
      case "ON_THE_WAY":
        return (
          <Button variant="button6" sx={{ color: "textWhite" }}>
            On the Way
          </Button>
        );
        break;
      case "ORDER_CONFIRM":
        return (
          <Button variant="button3" sx={{ color: "textWhite" }}>
            Order Confirm
          </Button>
        );
        break;
      case "CANCELLED":
        return (
          <Button variant="button2" sx={{ color: "textWhite" }}>
            Cancelled
          </Button>
        );
        break;

      default:
        break;
    }
  };
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
      flex: 1,
      width: 120,
      renderCell: ({ value }) => renderButton(value),
    },

    {
      field: "payable_amount",
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

  return (
    <Grid container columnSpacing={"25px"}>
      {/* user details */}
      <Grid item xs={4}>
        <Paper sx={{ py: "25px", width: 1, height: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              variant="circular"
              src={userOrders?.user?.profile_pic}
              sx={{ height: "120px", width: "120px" }}
            />
            <Typography variant="body4" color="textBlack" sx={{ py: "22px" }}>
              User ID: #225
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {userOrders?.user?.full_name}
            </Typography>
            <Typography variant="body6" color="textBlack" sx={{ py: "15px" }}>
              {userOrders?.user?.email}
            </Typography>
            <Typography variant="body6" color="textBlack">
              +880 1780995516
            </Typography>
          </Box>
          <Divider sx={{ my: "25px", mx: "16px" }} />
          <Box
            sx={{
              gap: "15px",
              display: "flex",
              flexDirection: "column",
              pl: "75px",
            }}
          >
            <Box>
              <Typography
                variant="body4"
                color={"textBlck"}
                sx={{ fontWeight: 600 }}
              >
                Last Order{" "}
              </Typography>
              <Typography variant="body6" color="textBlack">
                7 day ago - #235
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body4"
                color={"textBlck"}
                sx={{ fontWeight: 600 }}
              >
                Total Order{" "}
              </Typography>
              <Typography variant="body6" color="textBlack">
                $557.00
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body4"
                color={"textBlck"}
                sx={{ fontWeight: 600 }}
              >
                Registered{" "}
              </Typography>
              <Typography variant="body6" color="textBlack">
                27 June 2022
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
      {/* user details end */}
      <Grid item xs={8}>
        <Box sx={{ width: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body4">Order Information</Typography>
            <Typography>Total orders {userOrders?.orders?.length}</Typography>
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
              rows={userOrders?.orders}
              isLoading={productLoading}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
