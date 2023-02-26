import {
  Autocomplete,
  createFilterOptions,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Controller } from "react-hook-form";

const ProductDetails = ({ control }) => {
  const { data: products = [] } = useQuery(["/dashboard/products/"]);
  const { data: deliveryOption = [] } = useQuery([
    "/dashboard/delivery-option/",
  ]);
  const filter = createFilterOptions();

  return (
    <Paper
      sx={{
        padding: "45px",
        mt: "24px",
      }}
    >
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
                    padding: "8px",
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
                placeholder="Enter Product Stock "
                {...field}
                sx={{
                  border: 1,
                  borderColor: "primary.main",
                  height: "40px",
                  mt: " 10px",
                  borderRadius: "5px",
                  "& .MuiInputBase-input": {
                    padding: "8px",
                  },
                }}
              />
            )}
          />
        </Grid>
        {/* status */}
        <Grid item xs={4}>
          <InputLabel
            htmlFor="form-input-category"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            status
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
                  status
                </MenuItem>
                {products.map((category) => (
                  <MenuItem key={category?.slug} value={""}>
                    {}
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
                    padding: "8px",
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
        <Grid item xs={8}>
          <Controller
            name={"delivery-option-ss"}
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
                  // getOptionLabel={(option) => option.inputValue}
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
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      margin="normal"
                      variant="outlined"
                      sx={{
                        border: 1,
                        borderColor: "primary.main",
                        //   height: "40px",
                        borderRadius: "5px",
                        mt: "10px",
                        "& .MuiInputBase-input": {
                          padding: "8px",
                        },
                      }}
                    />
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

export default ProductDetails;
