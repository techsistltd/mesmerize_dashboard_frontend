import {
  Box,
  InputLabel,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import UploadImage from "../Shared/UploadImage";
import { useForm, Controller } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

const ProductStyleAndShape = () => {
  const { control, handleSubmit, reset } = useForm();
  const getData = (data) => {
    console.log({ ...data });
    reset();
  };

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
              width: "72px",
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
        <UploadImage />
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
              width: "72px",
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
        <UploadImage />
      </Box>
      <Box
        component={"form"}
        onSubmit={handleSubmit(getData)}
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
        {/* productName */}
        <Box>
          <InputLabel
            htmlFor="form-input-size"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            Size
          </InputLabel>
          <Controller
            name={"size"}
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <TextField
                id="form-input-size"
                variant="outlined"
                type="text"
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
                    padding: "8px",
                  },
                }}
              ></TextField>
            )}
          />
        </Box>
        {/* categories */}
        <Box>
          <InputLabel
            htmlFor="form-input-color"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            color
          </InputLabel>
          <Controller
            name={"color"}
            control={control}
            defaultValue=""
            render={({ field: { value, ...field } }) => (
              <TextField
                id="form-input-color"
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
                  color
                </MenuItem>
                <MenuItem value={"color"}>color</MenuItem>
              </TextField>
            )}
          />
        </Box>
        <Box>
          <InputLabel
            htmlFor="form-input-size"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            Flavor
          </InputLabel>
          <Controller
            name={"size"}
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <TextField
                id="form-input-size"
                variant="outlined"
                type="text"
                placeholder="Enter Product Flavor "
                {...field}
                sx={{
                  border: 1,
                  borderColor: "primary.main",
                  width: "350px",
                  borderRadius: "5px",
                  mt: "10px",
                  height: "40px",
                  "& .MuiInputBase-input": {
                    padding: "8px",
                  },
                }}
              ></TextField>
            )}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductStyleAndShape;
