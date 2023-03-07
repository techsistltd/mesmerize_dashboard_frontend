import { Box, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { getCroppedImg } from "../../../../Utils/helper";

const CustomizationAreaEditor = ({ customizationImage, setCustomArea }) => {
  const imgRef = useRef(null);
  const [crop, setCrop] = useState({
    unit: "%",
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });
  const [completedCrop, setCompletedCrop] = useState();

  const handleCropComplete = () => {
    const editable_image_area = getCroppedImg(imgRef.current, completedCrop);
    if (
      Boolean(editable_image_area) &&
      Boolean(editable_image_area !== "data:,")
    ) {
      const { x, y, width, height } = crop;
      const customize_product_position = {
        editable_image_area,
        width: `${width}%`,
        height: `${height}%`,
        left: `${x}%`,
        top: `${y}%`,
      };
      setCustomArea(customize_product_position);
      // console.log(customize_product_position);
    }
  };

  return (
    <Box>
      <ReactCrop
        ruleOfThirds
        crop={crop}
        onChange={(_, percentCrop) => setCrop(percentCrop)}
        onComplete={(c) => setCompletedCrop(c)}
        style={{
          borderRadius: "3px",
          width: "100%",
        }}
      >
        <Box
          component="img"
          alt="Crop me"
          ref={imgRef}
          src={URL.createObjectURL(customizationImage)}
          sx={{ width: 1, height: 1, borderRadius: "3px" }}
        />
      </ReactCrop>
      <Button
        variant="contained"
        disabled={!Boolean(crop?.width && crop?.height)}
        onClick={handleCropComplete}
        sx={{ width: 1, mt: "24px" }}
      >
        Continue with selected area
      </Button>
    </Box>
  );
};

export default CustomizationAreaEditor;
