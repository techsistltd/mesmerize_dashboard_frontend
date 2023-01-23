import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";

const DeleteDialog = ({ open = false, handleClose = () => null }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <DeleteIcon />
        <Typography variant="h5">Delete Confirmation</Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          minHeight: "60px",
          minWidth: "500px",
        }}
      >
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ mb: "20px", gap: "16px", pr: "24px" }}>
        <Button
          variant="contained"
          onClick={() => handleClose()}
          sx={{
            color: "textBlack",
            borderRadius: "6px",
            bgcolor: "rgba(168, 170, 174, 0.16)",
            "&:hover": {
              bgcolor: "rgba(168, 170, 174, 0.16)",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => handleClose(true)}
          autoFocus
          sx={{
            color: "textWhite",
            borderRadius: "6px",
            bgcolor: "#EA5046",
            "&:hover": {
              bgcolor: "#EA5046",
            },
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
