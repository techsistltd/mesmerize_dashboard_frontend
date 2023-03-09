import { Box, Button, FormHelperText, Grid } from "@mui/material";
import React, { Fragment } from "react";
import { Controller } from "react-hook-form";
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
          {value?.map(
            ({ image }, index) =>
              Boolean(image) && (
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
                    src={URL.createObjectURL(image)}
                    sx={{
                      height: "99px",
                      width: "109px",
                      borderRadius: "5px",
                      boxShadow: "0px 1px 4px",
                      bgcolor: "#FCFCFC",
                    }}
                  />
                </Grid>
              )
          )}
          <Grid
            item
            xs={1}
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
                padding: "24px",
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
