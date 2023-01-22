import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import React, { useState } from "react";

const Epaper = () => {
  const [date, setDate] = useState(moment());
  return (
    <Box
      sx={{
        bgcolor: "color6.main",
        py: "28px",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">E-Paper List</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <DesktopDatePicker
              inputFormat="MM-DD-YYYY"
              value={date}
              onChange={(value) => setDate(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    "& fieldset": {
                      border: "1px solid !important",
                      borderColor: "primary.main",
                      borderRadius: "5px",
                    },
                    "& input": {
                      paddingY: 0,
                      height: "38px",
                    },
                  }}
                />
              )}
            />
            <Button
              color="color14"
              variant="contained"
              sx={{
                width: "105px",
                height: "38px",
                borderRadius: "5px",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Epaper;
