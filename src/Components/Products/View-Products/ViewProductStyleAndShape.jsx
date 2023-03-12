import { Box, Chip, Grid, Paper, Tooltip, Typography } from "@mui/material";
import React from "react";

const ViewProductStyleAndShape = ({ product }) => {
  return (
    <Paper
      sx={{
        padding: "45px",
        mt: "24px",
        display: Boolean(
          product?.product_style?.length ||
            product?.product_shape?.length ||
            product?.product_structure?.length ||
            product?.product_color?.length ||
            product?.product_flavour?.length
        )
          ? "block"
          : "none",
      }}
    >
      <Grid container rowGap={"45px"} columnSpacing={"45px"}>
        {Boolean(product?.product_style?.length) && (
          <Grid item xs={12}>
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
              {product?.product_style?.map(({ image = "" }, index) => (
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
          </Grid>
        )}
        {Boolean(product?.product_shape?.length) && (
          <Grid item xs={12}>
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
              {product?.product_shape?.map(({ image = "" }, index) => (
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
          </Grid>
        )}
        {/* size */}
        {Boolean(product?.product_structure?.length) && (
          <Grid item xs={4}>
            <Box>
              <Typography variant="body4" color={"textBlack"}>
                Size
              </Typography>
              <Box
                variant="body6"
                color={"textBlack"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  overflowX: "auto",
                  border: 1,
                  borderColor: "primary.main",
                  width: 1,
                  borderRadius: "5px",
                  px: "11px",
                  mt: "10px",
                  height: "40px",
                }}
              >
                {product?.product_structure?.map(
                  ({ size = "", added_price = "" }, index) => {
                    return (
                      <Box key={index}>
                        <Chip
                          label={`${size} - ${added_price}`}
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
            </Box>
          </Grid>
        )}
        {/* flavour */}
        {Boolean(product?.product_flavour?.length) && (
          <Grid item xs={4}>
            <Box sx={{ width: 1 }}>
              <Typography variant="body4" color={"textBlack"}>
                Flavour
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  overflowX: "auto",
                  border: 1,
                  borderColor: "primary.main",
                  width: 1,
                  borderRadius: "5px",
                  px: "11px",
                  mt: "10px",
                  height: "40px",
                }}
              >
                {product?.product_flavour?.map(
                  ({ flavour = "", added_price = "" }, index) => {
                    return (
                      <Box key={index}>
                        <Chip
                          label={`${flavour} - ${added_price}`}
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
            </Box>
          </Grid>
        )}

        {/* color */}
        {Boolean(product?.product_color?.length) && (
          <Grid item xs={4}>
            <Box sx={{ width: 1 }}>
              <Typography variant="body4" color={"textBlack"}>
                color
              </Typography>
              <Box
                sx={{
                  border: 1,
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "textBlack",
                  gap: "8px",
                  borderColor: "primary.main",
                  width: 1,
                  height: "40px",
                  padding: "7px 11px",
                  borderRadius: "5px",
                  mt: "10px",
                }}
              >
                {product?.product_color?.map(({ code }, index) => {
                  return (
                    <Tooltip key={index} title={code}>
                      <Box
                        key={index}
                        sx={{
                          height: "25px",
                          width: "35px",
                          borderRadius: "5px",
                          bgcolor: `${code}`,
                        }}
                      ></Box>
                    </Tooltip>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default ViewProductStyleAndShape;
