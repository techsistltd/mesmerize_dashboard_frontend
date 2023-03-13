import { Box } from "@mui/material";
import React, { useState } from "react";
import OrdersTable from "../../Components/Orders/OrdersTable";
import OrderTabsAndSearch from "../../Components/Orders/OrderTabsAndSearch";
const Orders = () => {
  const [filters, setFilters] = useState({
    status: "",
    order_id: "",
    customer_name: "",
  });

  return (
    <Box>
      <OrderTabsAndSearch filters={filters} setFilters={setFilters} />
      <OrdersTable filters={filters} />
    </Box>
  );
};

export default Orders;
