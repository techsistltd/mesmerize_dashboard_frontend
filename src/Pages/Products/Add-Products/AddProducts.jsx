import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toFormData } from "multipart-object";
import { useSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProductDetails from "../../../Components/Products/Add-Products/ProductDetails";
import ProductStyleAndShape from "../../../Components/Products/Add-Products/ProductStyleAndShape";
import RichTextProduct from "../../../Components/Products/Add-Products/RichTextProduct";
import UploadProductsImage from "../../../Components/Products/Add-Products/UploadProductsImage";
import axiosApi from "../../../Utils/axiosApi";

const AddProducts = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, reset } = useForm();

  const { enqueueSnackbar } = useSnackbar();

  const queryClient = useQueryClient();

  const { mutate: productMutation, isLoading: productMutationLoading } =
    useMutation(
      (payload) =>
        axiosApi.post("/dashboard/products/", payload, {
          headers: {
            "content-type": "multipart/form-data",
          },
        }),
      {
        onSuccess: (data) => {
          console.log(data);
          // reset();
          // navigate(`/products/${data?.slug}`);
          queryClient.invalidateQueries(["/dashboard/products/"]);
          enqueueSnackbar("Successfully Added Product", {
            variant: "success",
          });
        },
        onError: (err) => {
          console.log(err);
          enqueueSnackbar("Something went wrong", {
            variant: "error",
          });
        },
      }
    );

  const getData = (data) => {
    const nestedData = toFormData(data, {
      separator: "mixedDot",
    });
    productMutation(nestedData);
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
