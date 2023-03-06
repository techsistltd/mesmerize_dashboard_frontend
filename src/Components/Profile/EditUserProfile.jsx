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

  setError("email", {
    message: "error?.response?.data?.details",
  });

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
        <Grid item xs={4}>
          <Controller
            name={"full_name"}
            control={control}
            rules={{
              required: {
                value: true,
                message: "name is required",
              },
            }}
            defaultValue={""}
            render={({ field, fieldState: { error } }) => (
              <Fragment>
                <InputLabel
                  required
                  error={Boolean(error)}
                  htmlFor="form-input-name"
                  sx={{
                    color: "textBlack",
                    fontSize: "16px",
                  }}
                >
                  Name
                </InputLabel>
                <TextField
                  fullWidth
                  error={Boolean(error)}
                  helperText={Boolean(error) && error?.message}
                  id="form-input-name"
                  variant="outlined"
                  type="text"
                  placeholder="Enter your name"
                  {...field}
                  sx={{
                    border: 1,
                    borderColor: "primary.main",
                    borderRadius: "5px",
                    height: "40px",
                    mt: "10px",
                    "& .MuiInputBase-input": {
                      padding: "7px",
                    },
                  }}
                />
              </Fragment>
            )}
          />
        </Grid>
        {/* email */}
        <Grid item xs={4}>
          <Controller
            name={"email"}
            control={control}
            rules={{
              required: {
                value: true,
                message: "email is required",
              },
            }}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <Fragment>
                <InputLabel
                  required
                  error={Boolean(error)}
                  htmlFor="form-input-email"
                  sx={{
                    color: "textBlack",
                    fontSize: "16px",
                  }}
                >
                  Email
                </InputLabel>
                <TextField
                  fullWidth
                  id="form-input-email"
                  error={Boolean(error)}
                  helperText={Boolean(error) && error?.message}
                  variant="outlined"
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                  sx={{
                    border: 1,
                    borderColor: "primary.email",
                    height: "40px",
                    mt: " 10px",
                    borderRadius: "5px",
                    "& .MuiInputBase-input": {
                      padding: "7px",
                    },
                  }}
                />
              </Fragment>
            )}
          />
        </Grid>
        {/* phone number */}
        <Grid item xs={4}>
          <Controller
            name={"phone_number"}
            control={control}
            rules={{
              required: {
                value: true,
                message: "Phone number is required",
              },
            }}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <Fragment>
                <InputLabel
                  required
                  error={Boolean(error)}
                  htmlFor="form-input-email"
                  sx={{
                    color: "textBlack",
                    fontSize: "16px",
                  }}
                >
                  Email
                </InputLabel>
                <TextField
                  fullWidth
                  id="form-input-email"
                  error={Boolean(error)}
                  helperText={Boolean(error) && error?.message}
                  variant="outlined"
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                  sx={{
                    border: 1,
                    borderColor: "primary.email",
                    height: "40px",
                    mt: " 10px",
                    borderRadius: "5px",
                    "& .MuiInputBase-input": {
                      padding: "7px",
                    },
                  }}
                />
              </Fragment>
            )}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EditUserProfile;
