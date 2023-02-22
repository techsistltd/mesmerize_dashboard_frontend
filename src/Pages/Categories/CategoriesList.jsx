import { Box, Button, Collapse, TextField, Typography } from "@mui/material";

import React, { useState } from "react";
import { Fragment } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ManageCategories from "../../Components/Categories/ManageCategories";
import CategoriesListTable from "../../Components/Categories/CategoriesListTable";

import SearchField from "../../Components/Shared/SearchField";

const CategoriesList = () => {
  const [openEditor, setOpenEditor] = useState(false);

  return (
    <Box>
      {/* typography and search */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <Typography variant="body4">Produt Categories</Typography>
          <Button
            variant="button3"
            sx={{ gap: "8px" }}
            onClick={() => setOpenEditor(true)}
          >
            <AiOutlinePlusCircle /> Add Categories
          </Button>
        </Box>
        <SearchField borderVariant />
      </Box>

      {Boolean(openEditor) && (
        <ManageCategories
          item={openEditor}
          handleClose={() => setOpenEditor(false)}
        />
      )}
      {/* typography and search end */}
      <CategoriesListTable handleEdit={(row) => setOpenEditor(row)} />
    </Box>
  );
};

export default CategoriesList;
