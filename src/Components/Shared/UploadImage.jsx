import { Box, Button, FormHelperText, Grid, IconButton } from "@mui/material";
import React, { Fragment } from "react";
import { Controller } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import cloudUpload from "../../Assets/cloudUpload.png";

const UploadImage = ({
  control,
  fieldName = "",
  helperText = "",
  required = false,
}) => {
  if (!Boolean(control)) {
    return;
  }

  return (
    <Controller
      name={fieldName}
      control={control}
      rules={{
        required: {
          value: required,
          message: `${helperText} are required`,
        },
      }}
      defaultValue={[]}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Fragment>
          {value?.map(({ image }, index, arr) => {
            return (
              Boolean(image) && (
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
                    }}
                  >
                    <Box
                      component="img"
                      src={URL.createObjectURL(image)}
                      sx={{
                        width: 1,
                        aspectRatio: "1/1",
                        borderRadius: "5px",
                        boxShadow: "0px 1px 4px",
                        bgcolor: "#FCFCFC",
                      }}
                    />
                    <IconButton
                      onClick={() => {
                        const filtered = arr.filter(
                          (item) => item?.image?.name !== image?.name
                        );
                        onChange(filtered);
                      }}
                      sx={{
                        position: "absolute",
                        top: "10px",
                        right: "3px",
                        backgroundColor: "rgb(255 255 255 / 70%)",
                        padding: "3px !importrant",
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
              )
            );
          })}
          <Grid
            item
            xs={1.3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <Button
              component="label"
              disableRipple
              // disabled={files.length >= 5}
              sx={{
                boxShadow: "0px 1px 4px",
                bgcolor: "#FCFCFC",
                width: 1,
                aspectRatio: "1/1",
                "&:hover": {
                  bgcolor: "#FCFCFC",
                },
              }}
            >
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) =>
                  onChange([...value, { image: e.target.files[0] }])
                }
              />

              <Box component="img" src={cloudUpload} />
            </Button>
          </Grid>
          {Boolean(error) && (
            <Grid item xs={12}>
              <FormHelperText
                sx={{
                  color: "error.main",
                }}
              >
                {error?.message}
              </FormHelperText>
            </Grid>
          )}
        </Fragment>
      )}
    />
  );
};

export default UploadImage;
