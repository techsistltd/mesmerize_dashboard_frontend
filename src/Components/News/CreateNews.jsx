import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { categories, newsType, status } from "../../data/AddNewsData";
import TextEditor from "../Shared/TextEditor";

const CreateNews = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState("");

  const { control, handleSubmit, reset } = useForm();
  const getData = (data) => {
    console.log({ ...data });
    reset();
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(getData)}
      sx={{ width: "930px" }}
    >
      <Box>
        <InputLabel
          htmlFor="form-input-title"
          sx={{
            color: "textBlack",
            fontSize: "16px",
          }}
        >
          Title
        </InputLabel>
        <Controller
          name={"title"}
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <TextField
              fullWidth
              id="form-input-title"
              type={"text"}
              variant="outlined"
              {...field}
              placeholder="Type here... "
              sx={{
                border: 1,
                borderColor: "primary.main",
                width: 1,
                height: "40px",
                borderRadius: "5px",
                mt: "10px",
                "& .MuiInputBase-input": {
                  padding: "8px",
                },
              }}
            />
          )}
        />
      </Box>
      <Controller
        name={"content"}
        control={control}
        defaultValue={""}
        render={({ field }) => <TextEditor setValue={field.onChange} />}
      />
      {/* 1st selection section author, category, file */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", my: "30px" }}
      >
        {/* author */}
        <Box>
          <InputLabel
            htmlFor="form-input-author"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            Author Name
          </InputLabel>
          <Controller
            name={"author"}
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <TextField
                id="form-input-author"
                type={"text"}
                variant="outlined"
                {...field}
                placeholder="Type here... "
                sx={{
                  border: 1,
                  borderColor: "primary.main",
                  width: "295px",
                  height: "40px",
                  borderRadius: "5px",
                  mt: "10px",
                  "& .MuiInputBase-input": {
                    padding: "8px",
                  },
                }}
              />
            )}
          />
        </Box>
        {/* categories */}
        <Box>
          <InputLabel
            htmlFor="form-input-categories"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            Categories
          </InputLabel>
          <Controller
            name={"categories"}
            control={control}
            defaultValue={"Bangladesh"}
            render={({ field }) => (
              <TextField
                id="form-input-categories"
                variant="outlined"
                select
                {...field}
                sx={{
                  border: 1,
                  borderColor: "primary.main",
                  width: "295px",
                  height: "40px",
                  borderRadius: "5px",
                  mt: "10px",
                  "& .MuiInputBase-input": {
                    padding: "8px",
                  },
                }}
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Box>
        {/* file */}
        <Box>
          <InputLabel
            htmlFor="form-input-file"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            Image
          </InputLabel>
          <Controller
            name={"file"}
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <TextField
                id="form-input-file"
                variant="outlined"
                type="file"
                {...field}
                sx={{
                  border: 1,
                  borderColor: "primary.main",
                  width: "295px",
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
      {/* 1st selection end */}
      {/* 2nd selection start */}
      <Box sx={{ display: "flex", gap: "24px" }}>
        {/* news Type */}
        <Box>
          <InputLabel
            htmlFor="form-input-newsType"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            News Type
          </InputLabel>
          <Controller
            name={"news"}
            control={control}
            defaultValue={"Top News"}
            render={({ field }) => (
              <TextField
                id="form-input-newsType"
                select
                variant="outlined"
                {...field}
                sx={{
                  border: 1,
                  borderColor: "primary.main",
                  width: "295px",
                  borderRadius: "5px",
                  mt: "10px",
                  height: "40px",
                  "& .MuiInputBase-input": {
                    padding: "8px",
                  },
                }}
              >
                {newsType.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Box>
        {/* status */}
        <Box>
          <InputLabel
            htmlFor="form-input-status"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            Status
          </InputLabel>
          <Controller
            name={"status"}
            control={control}
            defaultValue={"Draft"}
            render={({ field }) => (
              <TextField
                id="form-input-status"
                select
                variant="outlined"
                {...field}
                sx={{
                  border: 1,
                  borderColor: "primary.main",
                  width: "295px",
                  borderRadius: "5px",
                  mt: "10px",
                  height: "40px",
                  "& .MuiInputBase-input": {
                    padding: "8px",
                  },
                }}
              >
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Box>
      </Box>
      {/* 2nd selection end */}
      <Button
        variant="button3"
        type="submit"
        sx={{
          fontWeight: 600,
          fontSize: "16px",
          mt: "40px",
          display: pathname === "/news" ? "none" : "block",
        }}
      >
        Create
      </Button>
    </Box>
  );
};

export default CreateNews;
