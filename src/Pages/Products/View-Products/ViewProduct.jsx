import { Box, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaPen } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import ViewProductDetails from "../../../Components/Products/View-Products/ViewProductDetails";
import ViewProductImage from "../../../Components/Products/View-Products/ViewProductImage";
import ViewProductStyleAndShape from "../../../Components/Products/View-Products/ViewProductStyleAndShape";

const ViewProduct = () => {
  const { productSlug } = useParams();

  const navigate = useNavigate();

  const { data: product = {} } = useQuery([
    `/dashboard/products/${productSlug}/`,
  ]);

  console.log(product);

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
        <Button variant="button3">Manage Customization</Button>
      </Box>
      <ViewProductImage product={product} />
      <ViewProductStyleAndShape product={product} />
      <ViewProductDetails product={product} />
    </Box>
  );
};

export default ViewProduct;
