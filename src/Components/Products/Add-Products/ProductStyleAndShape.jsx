import {
  Autocomplete,
  Box,
  Chip,
  createFilterOptions,
  Grid,
  IconButton,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import React, { Fragment, useState } from "react";
import { Controller } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { useParams } from "react-router-dom";
import DeleteDialog from "../../Shared/DeleteDialog";
import PairedInputField from "../../Shared/PairedInputField";
import UploadImage from "../../Shared/UploadImage";

const ProductStyleAndShape = ({
  control,
  previousStyleImage = [],
  previousShapeImage = [],
}) => {
  const filter = createFilterOptions();

  const { productSlug } = useParams();

  const queryClient = useQueryClient();

  const [deleteURL, setDeleteURL] = useState(null);

  return (
    <Paper
      sx={{
        padding: "45px",
        mt: "24px",
      }}
    >
      <Grid container rowGap={"45px"} columnSpacing={"45px"}>
        {/* style */}
        <Grid item xs={12}>
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
                  xs={1.3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      pt: "8px",
                      width: 1,
                      height: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={file?.image}
                      sx={{
                        width: 1,
                        aspectRatio: "1/1",
                        borderRadius: "5px",
                        boxShadow: "0px 1px 4px",
                        bgcolor: "#FCFCFC",
                      }}
                    />
                    <IconButton
                      onClick={() =>
                        setDeleteURL(`/dashboard/styles/${file?.id}`)
                      }
                      sx={{
                        position: "absolute",
                        top: "10px",
                        right: "3px",
                        backgroundColor: "rgb(255 255 255 / 80%)",
                        padding: "3px !important",
                        "&:hover": {
                          backgroundColor: "rgb(255 255 255 / 90%)",
                        },
                      }}
                    >
                      <RxCross2
                        style={{ color: "#3D464D", fontSize: "17px" }}
                      />
                    </IconButton>
                  </Box>
                </Grid>
              ))}
            <UploadImage control={control} fieldName={"styles"} />
          </Grid>
        </Grid>
        {/* shape */}
        <Grid item xs={12}>
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
                  xs={1.3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      pt: "8px",
                      width: 1,
                      height: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={file?.image}
                      sx={{
                        width: 1,
                        aspectRatio: "1/1",
                        borderRadius: "5px",
                        boxShadow: "0px 1px 4px",
                        bgcolor: "#FCFCFC",
                      }}
                    />
                    <IconButton
                      onClick={() =>
                        setDeleteURL(`/dashboard/shapes/${file?.id}`)
                      }
                      sx={{
                        position: "absolute",
                        top: "10px",
                        right: "3px",
                        backgroundColor: "rgb(255 255 255 / 80%)",
                        padding: "3px !important",
                        "&:hover": {
                          backgroundColor: "rgb(255 255 255 / 90%)",
                        },
                      }}
                    >
                      <RxCross2
                        style={{ color: "#3D464D", fontSize: "17px" }}
                      />
                    </IconButton>
                  </Box>
                </Grid>
              ))}
            <UploadImage control={control} fieldName={"shapes"} />
          </Grid>
        </Grid>
        {/* size */}
        <Grid item xs={4}>
          <Controller
            name={"sizes"}
            control={control}
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Size is required",
            //   },
            // }}
            // defaultValue={[]}
            render={({
              field: { value = [], onChange },
              fieldState: { error },
            }) => (
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
                <Box
                  variant="body6"
                  color={"textBlack"}
                  sx={{
                    border: 1,
                    width: 1,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    overflowX: "auto",
                    borderColor: "primary.main",
                    height: "40px",
                    borderRadius: "5px",
                    padding: "4px 11px",
                    mt: "10px",
                  }}
                >
                  {value?.map(({ size = "", added_price = "" }, index, arr) => {
                    return (
                      <Chip
                        key={index}
                        onDelete={() => {
                          const newData = arr?.filter(
                            (item) => item?.size !== size
                          );
                          onChange(newData);
                        }}
                        label={`${size} - ${added_price}`}
                        variant="outlined"
                        sx={{
                          height: "30px",
                          minWidth: "40px",
                          borderRadius: "6px",
                          "& .MuiChip-label": {
                            padding: " 6px",
                            fontSize: "14px",
                            color: "textBlack",
                          },
                        }}
                      />
                    );
                  })}
                </Box>
                <PairedInputField
                  firstField="size"
                  secondField="added_price"
                  onSubmit={(data) => {
                    const newData = [...value, data];
                    onChange(newData);
                  }}
                />
              </Fragment>
            )}
          />
        </Grid>
        {/* flavour */}
        <Grid item xs={4}>
          <Controller
            name={"flavours"}
            control={control}
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Flavour is required",
            //   },
            // }}
            defaultValue={[]}
            render={({
              field: { value = [], onChange },
              fieldState: { error },
            }) => (
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
                  Flavour
                </InputLabel>
                <Box
                  variant="body6"
                  color={"textBlack"}
                  sx={{
                    border: 1,
                    width: 1,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    overflowX: "auto",
                    borderColor: "primary.main",
                    height: "40px",
                    borderRadius: "5px",
                    padding: "4px 11px",
                    mt: "10px",
                  }}
                >
                  {value?.map(
                    ({ flavour = "", added_price = "" }, index, arr) => {
                      return (
                        <Chip
                          key={index}
                          onDelete={() => {
                            const newData = arr?.filter(
                              (item) => item?.flavour !== flavour
                            );
                            onChange(newData);
                          }}
                          label={`${flavour} - ${added_price}`}
                          variant="outlined"
                          sx={{
                            height: "30px",
                            minWidth: "40px",
                            borderRadius: "6px",
                            "& .MuiChip-label": {
                              padding: " 6px",
                              fontSize: "14px",
                              color: "textBlack",
                            },
                          }}
                        />
                      );
                    }
                  )}
                </Box>
                <PairedInputField
                  firstField="flavour"
                  secondField="added_price"
                  onSubmit={(data) => {
                    const newData = [...value, data];
                    onChange(newData);
                  }}
                />
              </Fragment>
            )}
          />
        </Grid>
        {/* color */}
        <Grid item xs={4}>
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
                  options={["red", "yellow", "green", "orange"]}
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
                          width: 1,
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
        </Grid>
      </Grid>
      <DeleteDialog
        open={Boolean(deleteURL)}
        deleteURL={deleteURL}
        handleClose={() => setDeleteURL(null)}
        successRefetch={() =>
          queryClient.invalidateQueries([`/dashboard/products/${productSlug}/`])
        }
      />
    </Paper>
  );
};

export default ProductStyleAndShape;
