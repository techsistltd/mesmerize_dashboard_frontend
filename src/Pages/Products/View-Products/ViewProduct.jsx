import { Box, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import CustomizationModal from "../../../Components/Products/Customizations/CustomizationModal";
import ViewCustomizationModal from "../../../Components/Products/Customizations/ViewCustomizationModal";
import ViewProductDetails from "../../../Components/Products/View-Products/ViewProductDetails";
import ViewProductImage from "../../../Components/Products/View-Products/ViewProductImage";
import ViewProductStyleAndShape from "../../../Components/Products/View-Products/ViewProductStyleAndShape";

const ViewProduct = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const [customizationModal, setCustomizationModal] = useState(false);
  const [viewCustomization, setViewCustomization] = useState(false);
  const { data: product = {} } = useQuery(
    [`/dashboard/products/${productSlug}/`],
    {
      onError: () => {
        navigate(-1);
      },
      cacheTime: 0,
    }
  );

  return (
    <Box>
      {/* button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "22px",
        }}
      >
        <Button
          onClick={() => navigate(`/products/${productSlug}/edit`)}
          variant="button3"
          sx={{
            gap: "8px",
          }}
        >
          <FaPen />
          Edit
        </Button>
        {Boolean(product?.is_customizable) ? (
          <Button variant="button3" onClick={() => setViewCustomization(true)}>
            View Customization
          </Button>
        ) : (
          <Button variant="button3" onClick={() => setCustomizationModal(true)}>
            Add Customization
          </Button>
        )}
      </Box>
      <ViewProductImage product={product} />
      <ViewProductStyleAndShape product={product} />
      <ViewProductDetails product={product} />
      {Boolean(customizationModal) && (
        <CustomizationModal
          product={product}
          open={Boolean(customizationModal)}
          handleClose={() => setCustomizationModal(false)}
        />
      )}
      {Boolean(viewCustomization) && (
        <ViewCustomizationModal
          productSlug={product?.slug}
          open={Boolean(viewCustomization)}
          handleClose={() => setViewCustomization(false)}
        />
      )}
    </Box>
  );
};

export default ViewProduct;
