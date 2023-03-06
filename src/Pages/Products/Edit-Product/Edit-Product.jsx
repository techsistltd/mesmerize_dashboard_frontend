import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ProductDetails from "../../../Components/Products/Add-Products/ProductDetails";
import ProductStyleAndShape from "../../../Components/Products/Add-Products/ProductStyleAndShape";
import RichTextProduct from "../../../Components/Products/Add-Products/RichTextProduct";
import UploadProductsImage from "../../../Components/Products/Add-Products/UploadProductsImage";
import axiosApi from "../../../Utils/axiosApi";

const EditProduct = () => {
  const { control, handleSubmit, reset, setValue } = useForm();

  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  const { productSlug } = useParams();

  const { data: product = {} } = useQuery([
    `/dashboard/products/${productSlug}/`,
  ]);

  useEffect(() => {
    if (product?.id) {
      setValue("title", product?.title);
      setValue("category", product?.category);
      setValue("styles", product?.styles);
      setValue("shapes", product?.shapes);
      setValue("sizes", product?.sizes);
      setValue("colors", product?.colors);
      setValue("flavours", product?.flavours);
      setValue("description", product?.description);
      setValue("price", product?.price);
      setValue("stock", product?.stock);
      setValue("status", product?.status);
      setValue("delivery_option", product?.delivery_option);
      setValue("tag", product?.tag);
    }
  }, [product]);

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

  const patchData = (data) => {
    patchProduct(data);
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(patchData)}>
      <UploadProductsImage previousImage={product?.images} control={control} />
      <ProductStyleAndShape
        previousStyleImage={product?.styles}
        previousShapeImage={product?.shapes}
        control={control}
      />
      <RichTextProduct control={control} />
      <ProductDetails control={control} />
      {/* submit button */}
      <LoadingButton
        loading={mutationLoading}
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
