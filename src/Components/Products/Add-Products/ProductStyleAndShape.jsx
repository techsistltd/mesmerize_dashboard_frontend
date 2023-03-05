import {
  Box,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import UploadImage from "../../Shared/UploadImage";
import { Controller } from "react-hook-form";
import { Fragment } from "react";

const ProductStyleAndShape = ({ control }) => {
  return (
    <Paper
      sx={{
        padding: "45px",
        mt: "24px",
      }}
    >
      <Box>
        <Typography
          variant="body4"
          sx={{
            position: "relative",
            mb: "30px",
            "&:after": {
              content: `""`,
              position: "absolute",
              width: "50px",
              height: "2px",
              bgcolor: "textBlack",
              bottom: "-10px",
              left: 0,
              mx: "auto",
            },
          }}
        >
          Style
        </Typography>
        <UploadImage
          control={control}
          fieldName="product_style"
          helperText="Style"
        />
      </Box>
      <Box sx={{ mt: "45px" }}>
        <Typography
          variant="body4"
          sx={{
            position: "relative",
            mb: "30px",
            "&:after": {
              content: `""`,
              position: "absolute",
              width: "50px",
              height: "2px",
              bgcolor: "textBlack",
              bottom: "-10px",
              left: 0,
              mx: "auto",
            },
          }}
        >
          Shape
        </Typography>
        <UploadImage
          control={control}
          fieldName="product_shape"
          helperText="Shape"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          mt: "40px",
          "& .MuiTextField-root": {
            // marginTop: 0,
          },
        }}
      >
        {/* size */}
        <Box>
          <Controller
            name={"product_size"}
            control={control}
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Size is required",
            //   },
            // }}
            defaultValue={""}
            render={({ field, fieldState: { error } }) => (
              <Fragment>
                <InputLabel
                  // required
                  // error={Boolean(error)}
                  htmlFor="form-input-size"
                  sx={{
                    color: "textBlack",
                    fontSize: "16px",
                  }}
                >
                  Size
                </InputLabel>
                <TextField
                  id="form-input-size"
                  variant="outlined"
                  type="text"
                  // error={Boolean(error)}
                  // helperText={Boolean(error) && error?.message}
                  placeholder="Enter Product Size "
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
                />
              </Fragment>
            )}
          />
        </Box>
        {/* color */}
        <Box>
          <Controller
            name={"product_color"}
            control={control}
            defaultValue=""
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Color is required",
            //   },
            // }}
            render={({ field: { value, ...field }, fieldState: { error } }) => (
              <Fragment>
                <InputLabel
                  // required
                  // error={Boolean(error)}
                  htmlFor="form-input-color"
                  sx={{
                    color: "textBlack",
                    fontSize: "16px",
                  }}
                >
                  color
                </InputLabel>
                <TextField
                  id="form-input-color"
                  variant="outlined"
                  select
                  // error={Boolean(error)}
                  // helperText={Boolean(error) && error?.message}
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
                    color
                  </MenuItem>
                  <MenuItem value={"color"}>color</MenuItem>
                  {/* {products?.product_color?.map(({ code }, index) => (
                    <MenuItem key={index} value={code}>
                      {code}
                    </MenuItem>
                  ))} */}
                </TextField>
              </Fragment>
            )}
          />
        </Box>
        {/* flavour */}
        <Box>
          <Controller
            name={"product_flavour"}
            control={control}
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Flavour is required",
            //   },
            // }}
            defaultValue={""}
            render={({ field, fieldState: { error } }) => (
              <Fragment>
                <InputLabel
                  // error={Boolean(error)}
                  // required
                  htmlFor="form-input-flavour"
                  sx={{
                    color: "textBlack",
                    fontSize: "16px",
                  }}
                >
                  Flavour
                </InputLabel>
                <TextField
                  id="form-input-flavour"
                  variant="outlined"
                  // error={Boolean(error)}
                  // helperText={Boolean(error) && error?.message}
                  type="text"
                  placeholder="Enter Product flavour "
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
                />
              </Fragment>
            )}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductStyleAndShape;
