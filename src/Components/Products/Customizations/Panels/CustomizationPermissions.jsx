import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";

const CustomizationPermissions = ({
  editArea = "",
  permissions,
  setPermissions = () => null,
}) => {
  return (
    <Box>
      <Box
        sx={{
          border: 1,
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <Box
          component="img"
          src={editArea}
          sx={{
            width: 1,
            borderRadius: "5px",
          }}
        />
      </Box>
      <Typography
        fontSize="18px"
        fontWeight={600}
        textAlign="center"
        marginTop="32px"
      >
        Add Customization Access
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              color="color14"
              checked={Boolean(permissions?.cus_text)}
              onChange={() =>
                setPermissions((ex) => {
                  return {
                    ...ex,
                    cus_text: !Boolean(ex?.cus_text),
                  };
                })
              }
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Text"
          labelPlacement="end"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="color14"
              checked={Boolean(permissions?.cus_image)}
              onChange={() =>
                setPermissions((ex) => {
                  return {
                    ...ex,
                    cus_image: !Boolean(ex?.cus_image),
                  };
                })
              }
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Image"
          labelPlacement="end"
        />
      </Box>
    </Box>
  );
};

export default CustomizationPermissions;
