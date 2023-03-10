import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toFormData } from "multipart-object";
import { useSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetails from "../../../Components/Products/Add-Products/ProductDetails";
import ProductStyleAndShape from "../../../Components/Products/Add-Products/ProductStyleAndShape";
import RichTextProduct from "../../../Components/Products/Add-Products/RichTextProduct";
import UploadProductsImage from "../../../Components/Products/Add-Products/UploadProductsImage";
import LoadingIndicator from "../../../Components/Shared/LoadingIndicator";
import axiosApi from "../../../Utils/axiosApi";

const EditProduct = () => {
  const { control, handleSubmit, reset, setValue } = useForm();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();

  const { productSlug } = useParams();

  const { data: product = {}, isLoading } = useQuery(
    [`/dashboard/products/${productSlug}/`],
    {
      onSuccess: (product) => {
        setValue("title", product?.title);
        setValue("category", product?.category?.id);
        setValue("sizes", product?.product_structure);
        setValue(
          "colors",
          product?.product_color?.map((e) => e?.code)
        );
        setValue("flavours", product?.product_flavour);
        setValue("description", product?.description);
        setValue("price", product?.price);
        setValue("stock", product?.stock);
        setValue("status", product?.status);
        setValue(
          "tags",
          product?.tag?.map((e) => e?.tag)
        );
        setValue(
          "occasions",
          product?.occasion?.map((e) => e?.title)
        );
      },
      cacheTime: 0,
      refetchOnMount: true,
    }
  );

  const { mutate: patchProduct, isLoading: mutationLoading } = useMutation(
    (payload) =>
      axiosApi.patch(`/dashboard/products/${productSlug}/`, payload, {
        headers: {
          "content-type": "multipart/form-data",
        },
      }),
    {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries([`/dashboard/products/${productSlug}/`]);
        navigate(-1);
        enqueueSnackbar("Successfully Update Product", {
          variant: "success",
        });
      },
      onError: (e) => {
        enqueueSnackbar("Something went wrong", {
          variant: "error",
        });
      },
    }
  );

  const patchData = ({ thumbnail, ...data }) => {
    if (Boolean(thumbnail)) {
      data.thumbnail = thumbnail;
    }
    const nestedData = toFormData(data, {
      separator: "mixedDot",
    });
    patchProduct(nestedData);
  };

  console.log(product);

  return Boolean(isLoading) ? (
    <LoadingIndicator height="50vh" />
  ) : (
    <Box component={"form"} onSubmit={handleSubmit(patchData)}>
      <UploadProductsImage
        previousImage={product?.product_image}
        control={control}
        required={false}
      />
      <ProductStyleAndShape
        previousStyleImage={product?.product_style}
        previousShapeImage={product?.product_shape}
        control={control}
      />
      <RichTextProduct control={control} />
      <ProductDetails control={control} required={false} />
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
