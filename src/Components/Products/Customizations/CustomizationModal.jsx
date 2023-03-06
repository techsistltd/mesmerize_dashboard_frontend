import { Box, IconButton, Modal, Paper, Typography } from "@mui/material";
import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import CustomizationPanel from "./CustomizationPanel";

const CustomizationModal = ({
  open = false,
  handleClose = () => null,
  product = {},
}) => {
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
        <CustomizationPanel product={product} handleClose={handleClose} />
      </Paper>
    </Modal>
  );
};

export default CustomizationModal;
