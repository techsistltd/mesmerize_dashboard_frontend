import { Box } from "@mui/material";
import React, { useState } from "react";
import ManageProductsTable from "../../../Components/Products/Manage-Products/ManageProductsTable";
import TabsAndSearch from "../../../Components/Products/Manage-Products/TabsAndSearch";

const ManageProducts = () => {
  const [filters, setFilters] = useState({
    status: "",
    category: "",
    product_name: "",
  });

  return (
    <Box>
      <TabsAndSearch filters={filters} setFilters={setFilters} />
      <ManageProductsTable filters={filters} />
    </Box>
  );
};

export default ManageProducts;
