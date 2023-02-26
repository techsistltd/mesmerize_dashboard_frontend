import { Box } from "@mui/material";
import React from "react";
import ManageProductsTable from "../../Components/Products/Manage-Products/ManageProductsTable";
import TabsAndSearch from "../../Components/Products/Manage-Products/TabsAndSearch";

const ManageProducts = () => {
  return (
    <Box>
      <TabsAndSearch />
      <ManageProductsTable />
    </Box>
  );
};

export default ManageProducts;
