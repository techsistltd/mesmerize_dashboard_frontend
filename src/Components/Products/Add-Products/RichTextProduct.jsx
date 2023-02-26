import { Paper, Typography, Box } from "@mui/material";
import React, { useRef } from "react";
import JoditEditor, { Jodit } from "jodit-react";
import { Controller } from "react-hook-form";

const RichTextProduct = ({ control }) => {
  const editor = useRef(null);
  const config = {
    buttons: ["align", "bold", "italic", "underline"],
    placeholder: "Type here.....",
  };

  return (
    <Paper sx={{ padding: "45px", mt: "24px" }}>
      <Typography
        variant="body4"
        sx={{
          position: "relative",
          mb: "30px",
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
        Product Discription
      </Typography>
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
          name={"details"}
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <JoditEditor ref={editor} {...field} config={config} />
          )}
        />
      </Box>
    </Paper>
  );
};

export default RichTextProduct;
