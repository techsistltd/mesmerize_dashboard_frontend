import { Box, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import AddPackageDetails from "../../../Components/Products/Add-Package/AddPackageDetails";
import PackageProductList from "../../../Components/Products/Add-Package/PackageProductList";
const AddPackage = () => {
  const { control, handleSubmit, reset } = useForm();

  const getData = (data) => {
    console.log({ ...data });
    reset();
  };
  return (
    <Box component={"form"} onSubmit={handleSubmit(getData)}>
      <AddPackageDetails control={control} />
      <PackageProductList />
      <Button
        variant="button4"
        type="submit"
        sx={{
          width: 1,
          fontSize: "16px",
          height: "40px",
          color: "textWhite",
        }}
      >
        Add To Package
      </Button>
    </Box>
  );
};

export default AddPackage;
