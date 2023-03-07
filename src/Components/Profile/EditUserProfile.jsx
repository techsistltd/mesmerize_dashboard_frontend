import {
  Box,
  Grid,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import { matchIsValidTel, MuiTelInput } from "mui-tel-input";
import { Controller, useForm } from "react-hook-form";
import { useGlobalContext } from "../../Global/GlobalContext";

const EditUserProfile = () => {
  const { control, handleSubmit, reset, setError } = useForm();

  const { currentUser } = useGlobalContext();

  const formInput = [
    {
      name: "full_name",
      defaultValue: currentUser?.full_name ?? "",
      rules: {
        required: {
          value: true,
          message: "Name is required",
        },
      },
      inputComponent: TextField,
      inputLabel: "Name",
      inputType: "text",
    },
    {
      name: "email",
      defaultValue: currentUser?.email ?? "",
      rules: {
        required: {
          value: true,
          message: "Email is required",
        },
      },
      inputComponent: TextField,
      inputLabel: "Email",
      inputType: "email",
    },
    {
      name: "phone_number",
      defaultValue: currentUser?.phone_number ?? "+880",
      rules: {
        validate: {
          required: (value) => {
            if (!Boolean(value)) {
              return "Phone number required";
            }
            if (matchIsValidTel(value)) {
              return true;
            }
            return "Phone number invalid";
          },
        },
      },
      inputComponent: MuiTelInput,
      inputLabel: "Phone Number",
      inputType: "tel",
      disablePadding: true,
    },
  ];

  return (
    <Paper sx={{ padding: "30px" }}>
      <Typography
        variant="body3"
        sx={{
          position: "relative",
          "&:after": {
            content: `""`,
            position: "absolute",
            width: "72px",
            height: "2px",
            bgcolor: "textBlack",
            bottom: "-10px",
            left: 0,
            mx: "auto",
          },
        }}
      >
        Edit Admin Information
      </Typography>
      <Grid
        container
        columnSpacing={"40px"}
        rowGap={"30px"}
        sx={{ mt: "28px" }}
      >
        {/* name */}
      </Grid>
    </Paper>
  );
};

export default EditUserProfile;
