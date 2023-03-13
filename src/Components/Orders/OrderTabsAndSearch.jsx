import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const buttonData = [
  {
    text: "All",
    value: "",
  },
  {
    text: "Pending",
    value: "PENDING",
  },
  {
    text: "Delivered",
    value: "DELIVERED",
  },
  {
    text: "Shipped",
    value: "SHIPPED",
  },
  {
    text: "Returned",
    value: "RETURNED",
  },
  {
    text: "Canceled",
    value: "CANCELED",
  },
];

const OrderTabsAndSearch = ({ setFilters = () => null, filters = {} }) => {
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
      order_id: "",
      customer_name: "",
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
          {/* Product Id */}
          <Box>
            <Controller
              name={"order_id"}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="Product ID"
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
          <Box>
            <Controller
              name={"customer_name"}
              control={control}
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  type="text"
                  placeholder="Customer full name"
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
            disabled={!Boolean(filters?.order_id || filters?.customer_name)}
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

export default OrderTabsAndSearch;
