import {
  Autocomplete,
  Box,
  createFilterOptions,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { Fragment } from "react";
import { Controller } from "react-hook-form";
import UploadImage from "../../Shared/UploadImage";

const ProductList = ({ control }) => {
  const { data: deliveryOption = [] } = useQuery([
    "/dashboard/delivery-option/",
  ]);

  const { data: categories = [] } = useQuery(["/dashboard/categories/"]);

  const filter = createFilterOptions();
  return (
    <Paper
      sx={{
        padding: "45px",
      }}
    >
      <Typography
        variant="body4"
        sx={{
          position: "relative",
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
        Add Package
      </Typography>
      {/* product name input field */}
      <Box
        sx={{
          mt: "25px",
        }}
      >
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
              fullWidth
              id="form-input-productName"
              variant="outlined"
              type="text"
              placeholder="Product Name"
              {...field}
              sx={{
                border: 1,
                borderColor: "primary.main",
                borderRadius: "5px",
                mt: "10px",
                height: "40px",
                "& .MuiInputBase-input": {
                  padding: "7px",
                },
              }}
            ></TextField>
          )}
        />
      </Box>
      {/* product name input field end */}

      {/* image upload section */}
      <Box
        sx={{
          my: "25px",
        }}
      >
        <Typography
          component={"p"}
          variant="body4"
          color={"textBlack"}
          sx={{
            mb: "20px",
          }}
        >
          Upload Package Image
        </Typography>
        <UploadImage
          required
          fieldName="package_image"
          helperText="Package image"
          control={control}
        />
      </Box>
      {/* image upload section end */}
      <Grid container columnSpacing={"40px"} rowGap={"30px"}>
        {/* price */}
        <Grid item xs={4}>
          <InputLabel
            htmlFor="form-input-price"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            Price
          </InputLabel>
          <Controller
            name={"price"}
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <TextField
                fullWidth
                id="form-input-price"
                variant="outlined"
                type="text"
                placeholder="Enter Price"
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
            )}
          />
        </Grid>
        {/* stock */}
        <Grid item xs={4}>
          <InputLabel
            htmlFor="form-input-stock"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            Stock
          </InputLabel>
          <Controller
            name={"stock"}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                id="form-input-stock"
                variant="outlined"
                type="text"
                placeholder="Enter Stock "
                {...field}
                sx={{
                  border: 1,
                  borderColor: "primary.main",
                  height: "40px",
                  mt: " 10px",
                  borderRadius: "5px",
                  "& .MuiInputBase-input": {
                    padding: "7px",
                  },
                }}
              />
            )}
          />
        </Grid>
        {/* status */}
        <Grid item xs={4}>
          <InputLabel
            htmlFor="form-input-status"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            status
          </InputLabel>
          <Controller
            name={"status"}
            control={control}
            defaultValue=""
            render={({ field: { value, ...field } }) => (
              <TextField
                fullWidth
                id="form-input-status"
                variant="outlined"
                select
                value={Boolean(value) ? value : "default"}
                {...field}
                sx={{
                  border: 1,
                  borderColor: "primary.main",
                  height: "40px",
                  borderRadius: "5px",
                  mt: "10px",
                  "& .MuiInputBase-input": {
                    padding: "7px",
                  },
                }}
              >
                <MenuItem value="default" disabled>
                  status
                </MenuItem>
                {categories?.map((category) => (
                  <MenuItem key={category?.slug} value={category?.id}>
                    {category?.title}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        {/* delivery option */}
        <Grid item xs={4}>
          <InputLabel
            htmlFor="form-input-delivery-option"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            Delivery Option
          </InputLabel>
          <Controller
            name={"delivery-option"}
            control={control}
            defaultValue=""
            render={({ field: { value, ...field } }) => (
              <TextField
                fullWidth
                id="form-input-delivery-option"
                variant="outlined"
                select
                value={Boolean(value) ? value : "default"}
                {...field}
                sx={{
                  border: 1,
                  borderColor: "primary.main",
                  height: "40px",
                  borderRadius: "5px",
                  mt: "10px",
                  "& .MuiInputBase-input": {
                    padding: "7px",
                  },
                }}
              >
                <MenuItem value="default" disabled>
                  All
                </MenuItem>
                {deliveryOption.map((row) => (
                  <MenuItem key={row?.name} value={row?.name}>
                    {row?.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        {/* tags */}
        <Grid item xs={8}>
          <Controller
            name={"tags"}
            control={control}
            defaultValue={[]}
            render={({ field: { value = [], onChange } }) => {
              return (
                <Autocomplete
                  id="autocomplete"
                  freeSolo
                  autoSelect
                  multiple
                  options={["option1"]}
                  value={value}
                  onChange={(_, newValue) => onChange(newValue)}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);
                    const { inputValue } = params;
                    const isExisting = options.some(
                      (option) => inputValue === option
                    );

                    if (inputValue !== "" && !isExisting) {
                      filtered.push(inputValue);
                    }

                    return filtered;
                  }}
                  sx={{
                    "& .MuiAutocomplete-tag": {
                      backgroundColor: "color12.main",
                      borderRadius: "5px",
                    },
                    "& .MuiOutlinedInput-root": {
                      padding: 0,
                    },
                    "& .MuiChip-label": {
                      color: "textWhite",
                    },
                    "& .MuiChip-deleteIcon": {
                      color: "textWhite",
                      "&:hover": {
                        color: "textWhite",
                      },
                    },
                  }}
                  renderInput={(params) => (
                    <Fragment>
                      <InputLabel
                        htmlFor="form-input-tags"
                        sx={{
                          color: "textBlack",
                          fontSize: "16px",
                        }}
                      >
                        Tags
                      </InputLabel>
                      <TextField
                        {...params}
                        fullWidth
                        id="form-input-tags"
                        margin="normal"
                        variant="outlined"
                        sx={{
                          border: 1,
                          borderColor: "primary.main",
                          height: "40px",
                          borderRadius: "5px",
                          mt: "10px",
                          "& .MuiInputBase-input": {
                            padding: "7px",
                          },
                        }}
                      />
                    </Fragment>
                  )}
                />
              );
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductList;
