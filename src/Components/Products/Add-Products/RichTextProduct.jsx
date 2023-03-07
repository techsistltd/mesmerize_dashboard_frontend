import { Paper, Typography, Box, FormHelperText } from "@mui/material";
import React, { useRef } from "react";
import JoditEditor, { Jodit } from "jodit-react";
import { Controller } from "react-hook-form";
import { Fragment } from "react";

const RichTextProduct = ({ control }) => {
  const config = {
    buttons: ["align", "bold", "italic", "underline"],
    placeholder: "Type here.....",
  };

  return (
    <Paper sx={{ padding: "45px", mt: "24px" }}>
      <Box
        sx={{
          "& .jodit-status-bar .jodit-status-bar__item a ": {
            display: "none",
          },
          "& .jodit-container:not(.jodit_inline)": {
            borderColor: "primary.main",
          },
          "& .jodit-add-new-line span": {
            display: "none",
          },
          mt: "30px",
        }}
      >
        <Controller
          name={"description"}
          control={control}
          rules={{
            required: {
              value: true,
              message: "Discription is required",
            },
          }}
          // defaultValue={""}
          render={({ field, fieldState: { error } }) => (
            <Fragment>
              <Typography
                variant="body4"
                sx={{
                  position: "relative",
                  color: error ? "#d32f2f" : "textBlack",
                  mb: "30px",
                  "&:after": {
                    content: `""`,
                    position: "absolute",
                    width: "72px",
                    height: "2px",
                    bgcolor: error ? "#d32f2f" : "textBlack",
                    bottom: "-10px",
                    left: 0,
                    mx: "auto",
                  },
                }}
              >
                Product Discription*
              </Typography>
              <JoditEditor
                {...field}
                // ref={ref}
                config={config}
                // value={value}
                // onChange={(e) => onChange(e)}
              />

              <FormHelperText
                sx={{
                  mt: "15px",
                  color: "error.main",
                }}
              >
                {error?.message}
              </FormHelperText>
            </Fragment>
          )}
        />
      </Box>
    </Paper>
  );
};

export default RichTextProduct;
