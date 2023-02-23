import { Box } from "@mui/material";
import React from "react";
import ProductStyleAndShape from "../../Components/Products/ProductStyleAndShape";
import UploadProductsImage from "../../Components/Products/UploadProductsImage";

const AddProducts = () => {
  return (
    <Box>
      <UploadProductsImage />
      <ProductStyleAndShape />
    </Box>
  );
};

export default AddProducts;
