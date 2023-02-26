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

const UploadProductsImage = ({ control }) => {
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
        <UploadImage />
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
            <InputLabel
              htmlFor="form-input-productName"
              sx={{
                color: "textBlack",
                fontSize: "16px",
              }}
            >
              Product Name
            </InputLabel>
            <Controller
              name={"productName"}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  id="form-input-productName"
                  variant="outlined"
                  type="text"
                  placeholder="Product Name"
                  {...field}
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
                ></TextField>
              )}
            />
          </Box>
          {/* categories */}
          <Box>
            <InputLabel
              htmlFor="form-input-category"
              sx={{
                color: "textBlack",
                fontSize: "16px",
              }}
            >
              Category
            </InputLabel>
            <Controller
              name={"categories"}
              control={control}
              defaultValue=""
              render={({ field: { value, ...field } }) => (
                <TextField
                  id="form-input-category"
                  variant="outlined"
                  select
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
                  {products.map((category) => (
                    <MenuItem key={category?.slug} value={category?.title}>
                      {category?.title}
                    </MenuItem>
                  ))}
                </TextField>
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
