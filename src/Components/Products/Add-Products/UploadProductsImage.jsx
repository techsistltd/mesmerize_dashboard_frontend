import {
  Box,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { Fragment, useState } from "react";
import { Controller } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { useParams } from "react-router-dom";
import DeleteDialog from "../../Shared/DeleteDialog";
import UploadImage from "../../Shared/UploadImage";

const UploadProductsImage = ({
  control,
  previousImage = [],
  required = true,
}) => {
  const { productSlug } = useParams();
  const queryClient = useQueryClient();
  const [deleteURL, setDeleteURL] = useState(null);
  const { data: categories = [] } = useQuery(["/dashboard/categories/"]);

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

        <Grid container columnGap={"35px"} rowGap={"35px"}>
          {Boolean(previousImage?.length) &&
            previousImage?.map((file, index) => (
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
                      setDeleteURL(
                        `/dashboard/product-image-delete/${file?.id}`
                      )
                    }
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "3px",
                      backgroundColor: "rgb(255 255 255 / 50%)",
                      padding: 0,
                      "&:hover": {
                        backgroundColor: "rgb(255 255 255 / 70%)",
                      },
                    }}
                  >
                    <RxCross2 style={{ color: " red", fontSize: "20px" }} />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          <UploadImage
            control={control}
            fieldName={"images"}
            helperText="Product image"
            required={required}
          />
        </Grid>
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
                        padding: "7px",
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
                        padding: "7px",
                      },
                    }}
                  >
                    <MenuItem value="default" disabled>
                      Category
                    </MenuItem>
                    {categories?.map((category) => (
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

export default UploadProductsImage;
