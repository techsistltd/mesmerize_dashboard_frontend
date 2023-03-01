import { Box, Chip, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const ViewProductDetails = ({ product }) => {
  return (
    <Box>
      <Paper sx={{ padding: "45px", mt: "25px" }}>
        <Box>
          <Typography
            variant="body4"
            sx={{
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
            Product Discription
          </Typography>
          <Typography
            variant="body4"
            color="textBlack"
            sx={{
              height: "200px",
              my: "30px",
              width: 1,
              border: 1,
              borderRadius: "5px",
              padding: "11px",
            }}
          >
            {product?.description}
          </Typography>
        </Box>
        <Grid container columnSpacing={"40px"} rowGap={"30px"}>
          {/* price */}
          <Grid item xs={4}>
            <Typography variant="body4" color="textBlack">
              Price
            </Typography>
            <Typography
              variant="body6"
              color="textBlack"
              sx={{
                border: 1,
                borderColor: "primary.main",
                borderRadius: "5px",
                padding: "7px 11px",
                height: "40px",
                mt: "10px",
              }}
            >
              {product?.price}
            </Typography>
          </Grid>
          {/* stock */}
          <Grid item xs={4}>
            <Typography variant="body4" color="textBlack">
              Stock
            </Typography>
            <Typography
              variant="body6"
              color="textBlack"
              sx={{
                border: 1,
                borderColor: "primary.main",
                height: "40px",
                padding: "7px 11px",
                mt: " 10px",
                borderRadius: "5px",
              }}
            >
              {product?.stock}
            </Typography>
          </Grid>
          {/* status */}
          <Grid item xs={4}>
            <Typography variant="body4" color="textBlack">
              status
            </Typography>
            <Typography
              variant="body6"
              color="textBlack"
              sx={{
                border: 1,
                borderColor: "primary.main",
                height: "40px",
                borderRadius: "5px",
                padding: "7px 11px",
                mt: "10px",
              }}
            >
              {/* {product?.} */}
            </Typography>
          </Grid>
          {/* delivery option */}
          <Grid item xs={4}>
            <Typography variant="body4" color="textBlack">
              Delivery Option
            </Typography>
            <Box
              variant="body6"
              color="textBlack"
              sx={{
                border: 1,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                overflowX: "auto",
                borderColor: "primary.main",
                height: "40px",
                borderRadius: "5px",
                px: "11px",
                mt: "10px",
              }}
            >
              {product?.product_delivery_options?.map(
                ({ option = {} }, index) => {
                  return (
                    <Box key={index}>
                      <Chip
                        label={option?.name}
                        variant="outlined"
                        sx={{
                          height: "30px",
                          borderRadius: "6px",
                          "& .MuiChip-label": {
                            padding: " 6px",
                          },
                        }}
                      />
                    </Box>
                  );
                }
              )}
            </Box>
          </Grid>
          {/* tags */}
          <Grid item xs={8}>
            <Typography variant="body4" color="textBlack">
              Tags
            </Typography>
            <Typography
              variant="body6"
              color="textBlack"
              sx={{
                border: 1,
                borderColor: "primary.main",
                height: "40px",
                borderRadius: "5px",
                mt: "10px",
              }}
            ></Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ViewProductDetails;
