import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import UploadImage from "../../Shared/UploadImage";
import { Fragment } from "react";

const UploadProductsImage = ({ control, productSlug, patchProduct }) => {
  const { data: products = [] } = useQuery(["/dashboard/products/"]);

  return (
    <Paper sx={{ padding: "45px" }}>
      <Box>
        {/* information and title */}
        <Box>
          <Typography
            variant="body4"
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
            Product Image
          </Typography>
          <Typography
            variant="body6"
            sx={{ my: "20px", color: "color11.main" }}
          >
            The picture will be displayed on the cover of the product details
            page. Sizes are between 330x330 and 2000x2000px.
          </Typography>
        </Box>
        {/* ------end------ */}
        {/* upload section */}
        <UploadImage
          control={control}
          fieldName={"product_image"}
          helperText="Product image"
          required
        />
        {/* -------end------- */}
        {/* input field */}
        <Box
          sx={{
            display: "flex",
            gap: "35px",
            mt: "40px",
            "& .MuiTextField-root": {
              //   marginTop: 0,
            },
          }}
        >
          {/* productName */}
          <Box>
            <Controller
              name={"title"}
              control={control}
              defaultValue={""}
              rules={{
                required: {
                  value: true,
                  message: "Product name is required",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <Fragment>
                  <InputLabel
                    required
                    error={Boolean(error)}
                    htmlFor="form-input-productName"
                    sx={{
                      color: "textBlack",
                      fontSize: "16px",
                    }}
                  >
                    Product Name
                  </InputLabel>
                  <TextField
                    id="form-input-productName"
                    variant="outlined"
                    type="text"
                    placeholder="Product Name"
                    {...field}
                    error={Boolean(error)}
                    helperText={Boolean(error) && error?.message}
                    sx={{
                      border: 1,
                      borderColor: "primary.main",
                      width: "350px",
                      borderRadius: "5px",
                      mt: "10px",
                      height: "40px",
                      "& .MuiInputBase-input": {
                        padding: "8px",
                      },
                    }}
                  />
                </Fragment>
              )}
            />
          </Box>
          {/* categories */}
          <Box>
            <Controller
              name={"category"}
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Category is required",
                },
              }}
              render={({
                field: { value, ...field },
                fieldState: { error },
              }) => (
                <Fragment>
                  <InputLabel
                    error={Boolean(error)}
                    required
                    htmlFor="form-input-category"
                    sx={{
                      color: "textBlack",
                      fontSize: "16px",
                    }}
                  >
                    Category
                  </InputLabel>
                  <TextField
                    id="form-input-category"
                    variant="outlined"
                    select
                    error={Boolean(error)}
                    helperText={Boolean(error) && error?.message}
                    value={Boolean(value) ? value : "default"}
                    {...field}
                    sx={{
                      border: 1,
                      borderColor: "primary.main",
                      width: "350px",
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
                    {products?.map((category) => (
                      <MenuItem key={category?.slug} value={category?.id}>
                        {category?.title}
                      </MenuItem>
                    ))}
                  </TextField>
                </Fragment>
              )}
            />
          </Box>
        </Box>
        {/* -----end------ */}
      </Box>
    </Paper>
  );
};

export default UploadProductsImage;
