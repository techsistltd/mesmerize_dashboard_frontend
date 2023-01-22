import { Box, Container, TextField, Typography } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import React, { useState } from "react";
import EpaperPageList from "../Components/Epaper/EpaperPageList";
import EpaperUpload from "../Components/Epaper/EpaperUpload";

const Epaper = () => {
  const [date, setDate] = useState(moment());

  return (
    <Box
      sx={{
        bgcolor: "color6.main",
        py: "28px",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "30px",
          }}
        >
          <Typography variant="h5">
            E-Paper of {moment(date).format("LL")}
          </Typography>
          <DesktopDatePicker
            inputFormat="MM-DD-YYYY"
            value={date}
            onChange={(value) => setDate(value)}
            maxDate={moment().add(2, "day")}
            renderInput={(params) => (
              <TextField
                disabled
                {...params}
                inputProps={{ ...params.inputProps, readOnly: true }}
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
        </Box>
        <EpaperUpload date={date} />
        <EpaperPageList />
      </Container>
    </Box>
  );
};

export default Epaper;
