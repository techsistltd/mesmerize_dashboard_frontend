import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const ViewProductStyleAndShape = ({ product }) => {
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
          color={"textBlack"}
          sx={{
            position: "relative",
            mb: "30px",
            "&:after": {
              content: `""`,
              position: "absolute",
              width: "50px",
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
        <Grid container columnGap={"35px"} rowGap={"35px"}>
          {product?.product_style?.image_style?.map(({ image = "" }, index) => (
            <Grid
              key={index}
              item
              xs={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                kay={index}
                component="img"
                src={image}
                sx={{
                  height: "99px",
                  width: "109px",
                  borderRadius: "5px",
                  boxShadow: "0px 1px 4px",
                  bgcolor: "#FCFCFC",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mt: "45px" }}>
        <Typography
          variant="body4"
          color={"textBlack"}
          sx={{
            position: "relative",
            mb: "30px",
            "&:after": {
              content: `""`,
              position: "absolute",
              width: "50px",
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
        <Grid container columnGap={"35px"} rowGap={"35px"}>
          {product?.product_shape?.image_shape?.map(({ image = "" }, index) => (
            <Grid
              key={index}
              item
              xs={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                kay={index}
                component="img"
                src={image}
                sx={{
                  height: "99px",
                  width: "109px",
                  borderRadius: "5px",
                  boxShadow: "0px 1px 4px",
                  bgcolor: "#FCFCFC",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          mt: "40px",
        }}
      >
        {/* size */}
        <Box>
          <Typography variant="body4" color={"textBlack"}>
            Size
          </Typography>
          <Typography
            variant="body6"
            color={"textBlack"}
            sx={{
              border: 1,
              borderColor: "primary.main",
              width: "350px",
              borderRadius: "5px",
              mt: "10px",
              padding: "7px 11px",
              height: "40px",
              "& .MuiInputBase-input": {
                padding: "8px",
              },
            }}
          ></Typography>
        </Box>
        {/* color */}
        <Box>
          <Typography variant="body4" color={"textBlack"}>
            color
          </Typography>
          <Typography
            variant="body6"
            color={"textBlack"}
            sx={{
              border: 1,
              borderColor: "primary.main",
              width: "350px",
              height: "40px",
              padding: "7px 11px",
              borderRadius: "5px",
              mt: "10px",
            }}
          ></Typography>
        </Box>
        {/* flavor */}
        <Box>
          <Typography variant="body4" color={"textBlack"}>
            Flavor
          </Typography>
          <Typography
            variant="body6"
            color={"textBlack"}
            sx={{
              border: 1,
              borderColor: "primary.main",
              width: "350px",
              borderRadius: "5px",
              padding: "7px 11px",
              mt: "10px",
              height: "40px",
            }}
          ></Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ViewProductStyleAndShape;
