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
            {product?.description?.replace(/<[^>]*>|&[A-Za-z0-9#]+;/gi, " ")}
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
                textTransform: "capitalize",
              }}
            >
              {product?.status?.toLowerCase()}
            </Typography>
          </Grid>
          <Grid item xs={1.5}>
            <Typography variant="body4" color="textBlack">
              Thumbnail
            </Typography>
            <Box
              component="img"
              src={product?.thumbnail}
              sx={{
                width: 1,
                aspectRatio: "4/5",
                borderRadius: "5px",
                boxShadow: "0px 1px 4px",
                bgcolor: "#FCFCFC",
                mt: "10px",
              }}
            />
          </Grid>
          {/* tags */}
          <Grid item xs={10.5}>
            <Typography variant="body4" color="textBlack">
              Tags
            </Typography>
            <Box
              sx={{
                border: 1,
                display: "flex",

                alignItems: "start",
                gap: "8px",
                overflowX: "auto",
                borderColor: "primary.main",
                height: "131px",
                borderRadius: "5px",
                padding: "11px",
                mt: "10px",
              }}
            >
              {product?.tag?.map(({ tag }, index) => {
                return (
                  <Box key={index}>
                    <Chip
                      label={tag}
                      variant="outlined"
                      sx={{
                        height: "30px",
                        minWidth: "40px",

                        borderRadius: "6px",
                        "& .MuiChip-label": {
                          padding: " 6px",
                          fontSize: "14px",
                          color: "textBlack",
                        },
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body4" color="textBlack">
              Occasions
            </Typography>
            <Box
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
              {product?.occasion?.map(({ title }, index) => {
                return (
                  <Box key={index}>
                    <Chip
                      label={title}
                      variant="outlined"
                      sx={{
                        height: "30px",
                        minWidth: "40px",

                        borderRadius: "6px",
                        "& .MuiChip-label": {
                          padding: " 6px",
                          fontSize: "14px",
                          color: "textBlack",
                        },
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ViewProductDetails;
