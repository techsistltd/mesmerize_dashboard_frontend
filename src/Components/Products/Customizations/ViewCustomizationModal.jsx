import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import DeleteDialog from "../../Shared/DeleteDialog";

const ViewCustomizationModal = ({
  open = false,
  handleClose = () => null,
  productSlug = "",
}) => {
  const [deleteCustomization, setDeleteCustomization] = useState(false);
  const queryClient = useQueryClient();
  const { data: customizations } = useQuery(
    [`/mesmerize/get-customization/${productSlug}/`],
    {
      cacheTime: 0,
    }
  );

  return (
    <Modal
      open={open}
      // onClose={handleClose}
      aria-labelledby="modal-product-customization"
      aria-describedby="modal-product-customization"
    >
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "30px",
          minWidth: "40vw",
        }}
      >
        <Box
          sx={{
            position: "relative",
            mb: "20px",
          }}
        >
          <IconButton
            variant="contained"
            color="color1"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: -10,
              right: 0,
              padding: 0,
            }}
          >
            <AiFillCloseSquare
              style={{
                fontSize: "35px",
              }}
            />
          </IconButton>
          <Typography variant="h5">Product Customizations</Typography>
        </Box>
        <Box
          sx={{
            maxHeight: "80vh",
            overflowY: "auto",
            // scrollbar
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "3px",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={customizations?.customize_image}
              sx={{
                width: 1,
                height: 1,
                borderRadius: "3px",
              }}
            />
            <Box
              sx={{
                borderRadius: "3px",
                position: "absolute",
                width: customizations?.width,
                top: customizations?.top,
                left: customizations?.left,
                height: customizations?.height,
                border: "2px dashed",
              }}
            />
          </Box>
          <Button
            variant="button6"
            onClick={() => setDeleteCustomization(true)}
            sx={{ width: 1, mt: "24px" }}
          >
            Remove this customization
          </Button>
        </Box>
        <DeleteDialog
          open={Boolean(deleteCustomization)}
          deleteURL={`/dashboard/customize-product-image/${customizations?.id}/`}
          handleClose={() => setDeleteCustomization(false)}
          successRefetch={() => {
            queryClient.invalidateQueries([
              `/dashboard/products/${productSlug}/`,
            ]);
            handleClose();
          }}
        />
      </Paper>
    </Modal>
  );
};

export default ViewCustomizationModal;
