import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ProductDetails from "../../../Components/Products/Add-Products/ProductDetails";
import ProductStyleAndShape from "../../../Components/Products/Add-Products/ProductStyleAndShape";
import RichTextProduct from "../../../Components/Products/Add-Products/RichTextProduct";
import UploadProductsImage from "../../../Components/Products/Add-Products/UploadProductsImage";
import axiosApi from "../../../Utils/axiosApi";

const EditProduct = () => {
  const { control, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  const { productSlug } = useParams;

  const { mutate: patchProduct, isLoading: mutationLoading } = useMutation(
    (payload) => axiosApi.patch(`/dashboard/products/${productSlug}/`, payload),
    {
      onSuccess: () => {
        enqueueSnackbar("Successfully Update Product", {
          variant: "success",
        });
        queryClient.invalidateQueries(["/dashboard/products/"]);
      },
      onError: (e) => {
        enqueueSnackbar("Something went wrong", {
          variant: "error",
        });
      },
    }
  );

  return (
    <Box>
      <UploadProductsImage control={control} patchProduct={patchProduct} />
      <ProductStyleAndShape control={control} />
      <RichTextProduct control={control} />
      <ProductDetails control={control} />
      {/* submit button */}
      <LoadingButton
        // loading={mutationLoading}
        variant="button3"
        type="submit"
        sx={{
          fontWeight: 600,
          fontSize: "16px",
          height: "40px",
          mt: "30px",
        }}
      >
        Update
      </LoadingButton>
    </Box>
  );
};

export default EditProduct;
