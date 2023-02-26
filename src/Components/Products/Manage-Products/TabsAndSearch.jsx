import { Box, Button, InputLabel, MenuItem, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const TabsAndSearch = () => {
  const { data: products = [] } = useQuery(["/dashboard/products/"]);

  const [selected, setSelected] = useState(0);

  const { control, handleSubmit, reset } = useForm();
  const getData = (data) => {
    console.log({ ...data });
    reset();
  };

  const buttonData = [
    {
      text: "All",
    },
    {
      text: "Draft(1)",
    },
    {
      text: "Stock(1)",
    },
    {
      text: "Out of Stock(0)",
    },
    {
      text: "Archive(1)",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "color2.main",
          width: 1,
        }}
      >
        {buttonData.map(({ text }, idx) => {
          return (
            <Button
              key={idx}
              onClick={() => setSelected(idx)}
              variant="text"
              sx={{
                width: 1,
                height: "54px",
                fontWeight: 600,
                transition: ".50s ease",
                borderRadius: 0,
                backgroundColor: selected === idx ? "color3.main" : "unset",
                color: selected === idx ? "textWhite" : "unset",
                "&:hover": {
                  backgroundColor: selected === idx ? "color3.main" : "unset",
                  color: selected === idx ? "textWhite" : "unset",
                },
              }}
            >
              {text}
            </Button>
          );
        })}
      </Box>
      <Box
        component={"form"}
        onSubmit={handleSubmit(getData)}
        sx={{
          display: "flex",
          gap: "50px",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            "& .MuiTextField-root": {
              marginTop: 0,
            },
          }}
        >
          {/* categories */}
          <Box>
            <Controller
              name={"categories"}
              control={control}
              defaultValue=""
              render={({ field: { value, ...field } }) => (
                <TextField
                  variant="outlined"
                  select
                  value={Boolean(value) ? value : "default"}
                  {...field}
                  sx={{
                    border: 1,
                    borderColor: "primary.main",
                    width: "300px",
                    height: "40px",
                    borderRadius: "5px",
                    mt: "10px",
                    "& .MuiInputBase-input": {
                      padding: "8px",
                    },
                  }}
                >
                  <MenuItem value="default" disabled>
                    Category
                  </MenuItem>
                  {products.map((category) => (
                    <MenuItem key={category.slug} value={category.title}>
                      {category.title}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Box>
          {/* product id */}
          <Box>
            <Controller
              name={"prductId"}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  type={"text"}
                  variant="outlined"
                  {...field}
                  placeholder="Type here... "
                  sx={{
                    border: 1,
                    borderColor: "primary.main",
                    width: "300px",
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
          {/* productName */}
          <Box>
            <Controller
              name={"productName"}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="Product Name"
                  {...field}
                  sx={{
                    border: 1,
                    borderColor: "primary.main",
                    width: "300px",
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
        {/* submit button */}
        <Button
          variant="button3"
          type="submit"
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            height: "40px",
            width: 1,
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default TabsAndSearch;
