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
import React from "react";
import UploadImage from "../../Shared/UploadImage";
import { Controller } from "react-hook-form";
import { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";

const ProductStyleAndShape = ({
  control,
  previousStyleImage = [],
  previousShapeImage = [],
}) => {
  const { data: products = {} } = useQuery([`/dashboard/products/`]);

  const filter = createFilterOptions();

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

        <Grid container columnGap={"35px"} rowGap={"35px"}>
          {Boolean(previousStyleImage?.length) &&
            previousStyleImage?.map((file, index) => (
              <Grid
                key={index}
                item
                xs={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <Box
                  component="img"
                  src={file?.image}
                  sx={{
                    height: "99px",
                    width: "109px",
                    borderRadius: "5px",
                    boxShadow: "0px 1px 4px",
                    bgcolor: "#FCFCFC",
                  }}
                />
              </Grid>
            ))}
          <UploadImage control={control} fieldName={"styles"} />
        </Grid>
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
        <Grid container columnGap={"35px"} rowGap={"35px"}>
          {Boolean(previousShapeImage?.length) &&
            previousShapeImage?.map((file, index) => (
              <Grid
                key={index}
                item
                xs={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <Box
                  component="img"
                  src={file?.image}
                  sx={{
                    height: "99px",
                    width: "109px",
                    borderRadius: "5px",
                    boxShadow: "0px 1px 4px",
                    bgcolor: "#FCFCFC",
                  }}
                />
              </Grid>
            ))}
          <UploadImage control={control} fieldName={"shapes"} />
        </Grid>
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
            name={"sizes"}
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
                      padding: "7px",
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
            name={"colors"}
            control={control}
            defaultValue={[]}
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Color is required",
            //   },
            // }}
            render={({ field: { value = [], onChange } }) => {
              return (
                <Autocomplete
                  id="autocomplete"
                  freeSolo
                  autoSelect
                  multiple
                  options={["Red", "Yellow", "Green", "Orange"]}
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
                        htmlFor="form-input-color"
                        sx={{
                          color: "textBlack",
                          fontSize: "16px",
                        }}
                      >
                        Color
                      </InputLabel>
                      <TextField
                        {...params}
                        id="form-input-color"
                        margin="normal"
                        variant="outlined"
                        sx={{
                          border: 1,
                          borderColor: "primary.main",
                          overflowX: "auto",
                          height: "40px",
                          width: "350px",
                          borderRadius: "5px",
                          mt: "10px",
                          "& .MuiInputBase-input": {
                            padding: "6px",
                          },
                        }}
                      />
                    </Fragment>
                  )}
                />
              );
            }}
          />
        </Box>
        {/* flavour */}
        <Box>
          <Controller
            name={"flavours"}
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
                      padding: "7px",
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
