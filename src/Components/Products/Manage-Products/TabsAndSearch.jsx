import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const buttonData = [
  {
    text: "All",
    value: "ACTIVE",
  },
  {
    text: "Draft(1)",
    value: "DRAFT",
  },
  // {
  //   text: "Stock(1)",
  // },
  // {
  //   text: "Out of Stock(0)",
  // },
  {
    text: "Archive(1)",
    value: "ARCHIVE",
  },
];

const TabsAndSearch = ({ setFilters = () => null, filters = {} }) => {
  const { data: category = [] } = useQuery(["/dashboard/categories/"]);

  const [selected, setSelected] = useState(buttonData[0]?.value);

  const { control, handleSubmit, reset } = useForm();

  const getData = (data) => {
    console.log(data);
    setFilters((filters) => {
      return { ...filters, ...data };
    });
  };

  const handleClear = () => {
    setFilters({
      status: "",
      category: "",
      product_name: "",
    });

    reset();
  };

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
        {buttonData.map(({ text, value }, idx) => {
          return (
            <Button
              key={idx}
              onClick={() => {
                setSelected(value);
                setFilters((filters) => {
                  return { ...filters, status: value };
                });
              }}
              variant="text"
              sx={{
                width: 1,
                height: "54px",
                fontWeight: 600,
                transition: ".50s ease",
                borderRadius: 0,
                backgroundColor: selected === value ? "color3.main" : "unset",
                color: selected === value ? "textWhite" : "unset",
                "&:hover": {
                  backgroundColor: selected === value ? "color3.main" : "unset",
                  color: selected === value ? "textWhite" : "unset",
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
          {/* category */}
          <Box>
            <Controller
              name={"category"}
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
                      padding: "7px",
                    },
                  }}
                >
                  <MenuItem value="default" disabled>
                    Category
                  </MenuItem>
                  {category?.map((category) => (
                    <MenuItem key={category?.id} value={category?.id}>
                      {category?.title}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Box>
          {/* product id */}
          {/* <Box>
            <Controller
              name={"prductId"}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  type={"text"}
                  variant="outlined"
                  {...field}
                  placeholder="Product ID"
                  sx={{
                    border: 1,
                    borderColor: "primary.main",
                    width: "300px",
                    height: "40px",
                    borderRadius: "5px",
                    mt: "10px",
                    "& .MuiInputBase-input": {
                      padding: "7px",
                    },
                  }}
                />
              )}
            />
          </Box> */}
          {/* productName */}
          <Box>
            <Controller
              name={"product_name"}
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
                      padding: "7px",
                    },
                  }}
                />
              )}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          {/* submit button */}
          <Button
            variant="button3"
            type="submit"
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              height: "40px",
              width: "200px",
            }}
          >
            Search
          </Button>
          <Button
            onClick={handleClear}
            disabled={!Boolean(filters?.product_name || filters?.category)}
            variant="contained"
            color="error"
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              height: "40px",
              width: "100px",
            }}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TabsAndSearch;
