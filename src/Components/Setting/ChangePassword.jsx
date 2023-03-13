import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axiosApi from "../../Utils/axiosApi";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState({});
  const { control, handleSubmit, watch, reset } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const { mutate: passwordMutation, isLoading: mutationLoading } = useMutation(
    ({ old_password, new_password }) =>
      axiosApi.patch("/account/update-password/", {
        old_password,
        new_password,
      }),
    {
      onSuccess: () => {
        setShowPassword({});
        reset({ old_password: "", new_password: "", confirm_password: "" });
        enqueueSnackbar("Password updated successfully", {
          variant: "info",
        });
      },
      onError: () =>
        enqueueSnackbar("Failed to updated password", {
          variant: "error",
        }),
    }
  );

  const handlePasswordShow = (fieldName) => {
    setShowPassword({
      ...showPassword,
      [fieldName]: Boolean(showPassword[fieldName])
        ? !showPassword[fieldName]
        : true,
    });
  };

  const inputFields = [
    {
      name: "old_password",
      label: "Old Password",
      defaultValue: "",
      placeholder: "Enter your old password",
      rules: {
        required: {
          value: true,
          message: "Old password required",
        },
      },
    },
    {
      name: "new_password",
      label: "New Password",
      placeholder: "Enter your new password",
      defaultValue: "",
      rules: {
        required: {
          value: true,
          message: "New password required",
        },
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          message:
            "Password must contain an uppercase and a lowercase with minimum 8 character",
        },
      },
    },
    {
      name: "confirm_password",
      label: "Confirm Password",
      placeholder: "Enter your confirm password",
      defaultValue: "",
      rules: {
        required: {
          value: true,
          message: "Confirm password required",
        },
        validate: (val) => {
          if (watch("new_password") !== val) {
            return "Confirm password does not match";
          }
        },
      },
    },
  ];

  return (
    <Grid
      container
      columnSpacing={"25px"}
      component="form"
      onSubmit={handleSubmit(passwordMutation)}
      sx={{ marginTop: { xs: "10px", md: "26px" } }}
    >
      {inputFields.map(
        ({ name, label, defaultValue, placeholder, rules }, idx) => {
          return (
            <Grid key={idx} item xs={3.5}>
              <Controller
                key={`change-password-${name}`}
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={rules}
                render={({ field, fieldState: { error } }) => (
                  <Box sx={{ mb: { xs: "18px", md: "26px" } }}>
                    <InputLabel
                      error={Boolean(error)}
                      sx={{ fontSize: "14px", color: "textBlack", mb: "10px" }}
                      htmlFor={`input-password-${name}`}
                    >
                      {label}
                    </InputLabel>
                    <TextField
                      id={`input-password-${name}`}
                      type={Boolean(showPassword[name]) ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              tabIndex={-1}
                              aria-label="toggle password visibility"
                              onClick={() => handlePasswordShow(name)}
                              edge="end"
                            >
                              {showPassword[name] ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      placeholder={placeholder}
                      sx={{
                        width: "100%",
                        height: { xs: "40px", md: "50px" },
                        outline: 0,
                        border: "0.5px solid ",
                        borderRadius: "5px",
                        "& .MuiInputBase-input": {
                          fontSize: "14px",
                          paddingLeft: "24px",
                          paddingY: { xs: "9px", md: "14px" },
                          color: "#5D586C",
                        },
                      }}
                      error={Boolean(error)}
                      helperText={Boolean(error) && error?.message}
                      {...field}
                    />
                  </Box>
                )}
              />
            </Grid>
          );
        }
      )}
      <Grid item xs={12}>
        <LoadingButton
          loading={mutationLoading}
          variant="button3"
          type="submit"
          sx={{
            mt: "10px",
          }}
        >
          Change Password
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default ChangePassword;
