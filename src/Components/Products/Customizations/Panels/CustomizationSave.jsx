import { LoadingButton } from "@mui/lab";
import { Alert, Box, Button } from "@mui/material";
import React from "react";

const CustomizationSave = ({
  permissions = {},
  handleClose,
  handleMutate,
  isLoading,
}) => {
  const noPerm = Boolean(!permissions?.cus_image && !permissions?.cus_text);

  return (
    <Box
      sx={{
        mt: "15px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      {Boolean(noPerm) && (
        <Alert variant="outlined" severity="warning">
          Must select an customization access
        </Alert>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <LoadingButton
          variant="contained"
          color="color14"
          onClick={handleMutate}
          loading={isLoading}
        >
          Save Customization
        </LoadingButton>
        <Button variant="contained" color="error" onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default CustomizationSave;
