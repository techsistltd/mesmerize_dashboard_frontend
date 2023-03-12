import {
  Autocomplete,
  createFilterOptions,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";
import React, { Fragment } from "react";
import { Controller } from "react-hook-form";

const ProductDetails = ({ control, required = true }) => {
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
          <Controller
            name={"price"}
            control={control}
            rules={{
              required: {
                value: required,
                message: "Price is required",
              },
            }}
            defaultValue={""}
            render={({ field, fieldState: { error } }) => (
              <Fragment>
                <InputLabel
                  required
                  error={Boolean(error)}
                  htmlFor="form-input-price"
                  sx={{
                    color: "textBlack",
                    fontSize: "16px",
                  }}
                >
                  Price
                </InputLabel>
                <TextField
                  fullWidth
                  error={Boolean(error)}
                  helperText={Boolean(error) && error?.message}
                  id="form-input-price"
                  variant="outlined"
                  type="number"
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
              </Fragment>
            )}
          />
        </Grid>
        {/* stock */}
        <Grid item xs={4}>
          <Controller
            name={"stock"}
            control={control}
            rules={{
              required: {
                value: required,
                message: "Stock is required",
              },
            }}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <Fragment>
                <InputLabel
                  required
                  error={Boolean(error)}
                  htmlFor="form-input-stock"
                  sx={{
                    color: "textBlack",
                    fontSize: "16px",
                  }}
                >
                  Stock
                </InputLabel>
                <TextField
                  fullWidth
                  id="form-input-stock"
                  error={Boolean(error)}
                  helperText={Boolean(error) && error?.message}
                  variant="outlined"
                  type="number"
                  placeholder="Enter Product Stock "
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
              </Fragment>
            )}
          />
        </Grid>
        {/* status */}
        <Grid item xs={4}>
          <Controller
            name={"status"}
            control={control}
            rules={{
              required: {
                value: required,
                message: "Status is required",
              },
            }}
            defaultValue=""
            render={({ field: { value, ...field }, fieldState: { error } }) => (
              <Fragment>
                <InputLabel
                  required
                  error={Boolean(error)}
                  htmlFor="form-input-status"
                  sx={{
                    color: "textBlack",
                    fontSize: "16px",
                  }}
                >
                  Status
                </InputLabel>
                <TextField
                  fullWidth
                  id="form-input-status"
                  error={Boolean(error)}
                  helperText={Boolean(error) && error?.message}
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
                    Status
                  </MenuItem>
                  <MenuItem value="ACTIVE">Active</MenuItem>
                  <MenuItem value="ARCHIVE">Archive</MenuItem>
                  <MenuItem value="DRAFT">Draft</MenuItem>
                </TextField>
              </Fragment>
            )}
          />
        </Grid>
        {/* delivery option */}
        {/* <Grid item xs={4}>
          <Controller
            name={"delivery_option"}
            control={control}
            rules={{
              required: {
                value: true,
                message: "Delivery option is required",
              },
            }}
            defaultValue=""
            render={({ field: { value, ...field }, fieldState: { error } }) => (
              <Fragment>
                <InputLabel
                  required
                  error={Boolean(error)}
                  htmlFor="form-input-delivery-option"
                  sx={{
                    color: "textBlack",
                    fontSize: "16px",
                  }}
                >
                  Delivery Option
                </InputLabel>
                <TextField
                  fullWidth
                  id="form-input-delivery-option"
                  error={Boolean(error)}
                  helperText={Boolean(error) && error?.message}
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
              </Fragment>
            )}
          />
        </Grid> */}
        <Grid item xs={4}>
          <Controller
            name={"thumbnail"}
            control={control}
            rules={{
              required: {
                value: required,
                message: "Thumbnail is required",
              },
            }}
            defaultValue={[]}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <Fragment>
                <InputLabel
                  error={Boolean(error)}
                  required
                  htmlFor="form-input-thumbnail"
                  sx={{
                    color: "textBlack",
                    fontSize: "16px",
                  }}
                >
                  Thumbnail
                </InputLabel>
                <TextField
                  fullWidth
                  id="form-input-thumbnail"
                  error={Boolean(error)}
                  helperText={Boolean(error) && error?.message}
                  type={"file"}
                  variant="outlined"
                  onChange={(e) => onChange(e.target.files[0])}
                  sx={{
                    border: 1,
                    borderColor: "primary.main",
                    width: 1,
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

                    "& .MuiMenuList-root": {
                      boxShadow: "0px 4px 10px 5px rgba(0, 0, 0, 0.87)",
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
                          overflowX: "auto",
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
        {/* occasions */}
        <Grid item xs={12}>
          <Controller
            name={"occasions"}
            control={control}
            rules={{
              required: {
                value: required,
                message: "Occasions is required",
              },
            }}
            defaultValue={[]}
            render={({
              field: { value = [], onChange },
              fieldState: { error },
            }) => {
              return (
                <Autocomplete
                  id="autocomplete"
                  freeSolo
                  autoSelect
                  multiple
                  options={["Birthday", "Wedding", "Anniversary", "Easter"]}
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

                    "& .MuiMenuList-root": {
                      boxShadow: "0px 4px 10px 5px rgba(0, 0, 0, 0.87)",
                    },
                  }}
                  renderInput={(params) => (
                    <Fragment>
                      <InputLabel
                        required
                        error={Boolean(error)}
                        htmlFor="form-input-occasions"
                        sx={{
                          color: "textBlack",
                          fontSize: "16px",
                        }}
                      >
                        Occasions
                      </InputLabel>
                      <TextField
                        {...params}
                        fullWidth
                        error={Boolean(error)}
                        helperText={Boolean(error) && error?.message}
                        id="form-input-occasions"
                        margin="normal"
                        variant="outlined"
                        sx={{
                          border: 1,
                          borderColor: "primary.main",
                          overflowX: "auto",
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

export default ProductDetails;
