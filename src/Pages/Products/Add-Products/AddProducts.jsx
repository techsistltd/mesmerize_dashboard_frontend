import { Box, Button } from "@mui/material";
import React from "react";
import ProductDetails from "../../../Components/Products/Add-Products/ProductDetails";
import RichTextProduct from "../../../Components/Products/Add-Products/RichTextProduct";
import ProductStyleAndShape from "../../../Components/Products/Add-Products/ProductStyleAndShape";
import UploadProductsImage from "../../../Components/Products/Add-Products/UploadProductsImage";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const AddProducts = () => {
  const { productSlug } = useParams();
  const { control, handleSubmit, reset, formState } = useForm();

  const getData = (data) => {
    console.log({ ...data });
    // reset();
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(getData)}>
      <UploadProductsImage control={control} />
      <ProductStyleAndShape control={control} />
      <RichTextProduct control={control} />
      <ProductDetails control={control} />
      {/* submit button */}
      <Button
        variant="button3"
        type="submit"
        sx={{
          fontWeight: 600,
          fontSize: "16px",
          height: "40px",
          mt: "30px",
        }}
      >
        Create
      </Button>
    </Box>
  );
};

export default AddProducts;
