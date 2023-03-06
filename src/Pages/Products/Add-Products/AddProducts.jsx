import { Box } from "@mui/material";
import React from "react";
import ProductDetails from "../../../Components/Products/Add-Products/ProductDetails";
import RichTextProduct from "../../../Components/Products/Add-Products/RichTextProduct";
import ProductStyleAndShape from "../../../Components/Products/Add-Products/ProductStyleAndShape";
import UploadProductsImage from "../../../Components/Products/Add-Products/UploadProductsImage";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosApi from "../../../Utils/axiosApi";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";

const AddProducts = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, reset } = useForm();

  const { enqueueSnackbar } = useSnackbar();

  const queryClient = useQueryClient();

  const { mutate: productMutation, isLoading: productMutationLoading } =
    useMutation((payload) => axiosApi.post("/dashboard/products/", payload), {
      onSuccess: () => {
        reset();
        navigate("/products");
        enqueueSnackbar("Successfully Added Product", {
          variant: "success",
        });
        queryClient.invalidateQueries(["/dashboard/products/"]);
      },
      onError: () => {
        enqueueSnackbar("Something went wrong", {
          variant: "error",
        });
      },
    });

  const getData = (data) => {
    console.log(data);
    productMutation(data);
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(getData)}>
      <UploadProductsImage control={control} />
      <ProductStyleAndShape control={control} />
      <RichTextProduct control={control} />
      <ProductDetails control={control} />
      {/* submit button */}
      <LoadingButton
        loading={productMutationLoading}
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
      </LoadingButton>
    </Box>
  );
};

export default AddProducts;
