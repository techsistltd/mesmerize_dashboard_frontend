import { Box } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import React, { Fragment, useState } from "react";
import axiosApi from "../../../Utils/axiosApi";
import CustomizationAreaEditor from "./Panels/CustomizationAreaEditor";
import CustomizationImageUpload from "./Panels/CustomizationImageUpload";
import CustomizationPermissions from "./Panels/CustomizationPermissions";
import CustomizationSave from "./Panels/CustomizationSave";

const CustomizationPanel = ({ product = {}, handleClose = () => null }) => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const [customizationImage, setCustomizationImage] = useState(null);
  const [customArea, setCustomArea] = useState(null);
  const [permissions, setPermissions] = useState({
    cus_text: true,
    cus_image: false,
  });

  const {
    mutate: customizationMutation,
    isLoading: customizationMutationLoading,
  } = useMutation(
    (payload) =>
      axiosApi.post("/dashboard/customize-product-image/", payload, {
        headers: {
          "content-type": "multipart/form-data",
        },
      }),
    {
      onSuccess: () => {
        enqueueSnackbar("Successfully added customization.", {
          variant: "success",
        });
        queryClient.invalidateQueries([
          `/dashboard/products/${product?.slug}/`,
        ]);
        handleClose();
      },
      onError: () => {
        enqueueSnackbar("Something went wrong.", {
          variant: "error",
        });
      },
    }
  );

  const handleSubmission = () => {
    const payload = {
      ...customArea,
      ...permissions,
      customize_image: customizationImage,
      product: product?.id,
    };

    customizationMutation(payload);

    // console.log(payload);
  };

  return (
    <Box
      sx={{
        minWidth: "50vw",
        maxWidth: "70vw",
        maxHeight: "80vh",
        overflowY: "auto",
        px: "10px",
        // scrollbar
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          width: "3px",
        },
      }}
    >
      {Boolean(customizationImage) ? (
        <Fragment>
          {Boolean(customArea?.editable_image_area) ? (
            <Fragment>
              <CustomizationPermissions
                editArea={customArea?.editable_image_area}
                permissions={permissions}
                setPermissions={setPermissions}
              />
              <CustomizationSave
                permissions={permissions}
                handleClose={handleClose}
                isLoading={customizationMutationLoading}
                handleMutate={handleSubmission}
              />
            </Fragment>
          ) : (
            <CustomizationAreaEditor
              customizationImage={customizationImage}
              setCustomArea={setCustomArea}
            />
          )}
        </Fragment>
      ) : (
        <CustomizationImageUpload
          setCustomizationImage={setCustomizationImage}
        />
      )}
    </Box>
  );
};

export default CustomizationPanel;
