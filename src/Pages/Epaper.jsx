import { Box, Container, TextField, Typography } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React, { Fragment, useState } from "react";
import EpaperPageList from "../Components/Epaper/EpaperPageList";
import EpaperUpload from "../Components/Epaper/EpaperUpload";
import ErrorAlert from "../Components/Shared/ErrorAlert";

const Epaper = () => {
  const [date, setDate] = useState(moment());

  const {
    data: paper = {},
    isLoading,
    error,
  } = useQuery([
    `/epaper/papers/${moment(date).format("YYYY")}/${moment(date).format(
      "MM"
    )}/${moment(date).format("DD")}/`,
    date,
  ]);

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
        {Boolean(error) ? (
          <ErrorAlert error={error} />
        ) : (
          <Fragment>
            <EpaperUpload date={date} />
            <EpaperPageList
              isLoading={isLoading}
              paperPages={paper?.page_paper}
            />
          </Fragment>
        )}
      </Container>
    </Box>
  );
};

export default Epaper;
