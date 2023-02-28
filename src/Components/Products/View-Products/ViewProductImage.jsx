import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const ViewProductImage = ({ product }) => {
  return (
    <Paper
      sx={{
        padding: "45px",
        mt: "20px",
      }}
    >
      <Typography
        variant="body4"
        sx={{
          mb: "40px",
          position: "relative",
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
        Product Image
      </Typography>
      <Grid container columnGap={"35px"} rowGap={"35px"}>
        {product?.product_image?.map(({ image = "" }, index) => (
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
      {/* input field */}
      <Box
        sx={{
          display: "flex",
          gap: "35px",
          mt: "40px",
        }}
      >
        {/* productName */}
        <Box>
          <Typography variant="body4" color={"textBlack"}>
            Product Name
          </Typography>
          <Typography
            variant="body6"
            color="textBlack"
            sx={{
              border: 1,
              borderColor: "primary.main",
              width: "350px",
              borderRadius: "5px",
              padding: "7px 11px",
              mt: "10px",
              height: "40px",
            }}
          >
            {product?.title}
          </Typography>
        </Box>
        {/* categories */}
        <Box>
          <Typography
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            Category
          </Typography>
          <Typography
            sx={{
              border: 1,
              borderColor: "primary.main",
              width: "350px",
              height: "40px",
              borderRadius: "5px",
              padding: "7px 11px",
              mt: "10px",
            }}
          >
            {product?.category?.title}
          </Typography>
        </Box>
      </Box>
      {/* -----end------ */}
    </Paper>
  );
};

export default ViewProductImage;
