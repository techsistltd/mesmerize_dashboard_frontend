import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteDialog from "../Shared/DeleteDialog";

const EpaperPageList = ({ paperPages = [], isLoading = false }) => {
  const [deleteItem, setDeleteItem] = useState(null);

  const handleDeleteItem = (confirm = false) => {
    if (confirm) {
    }
    setDeleteItem(null);
  };

  return (
    <Box sx={{ mt: "40px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body3" fontWeight={600}>
          Uploaded Page List
        </Typography>
        <Button variant="button3">View Mapping List</Button>
      </Box>

      <TableContainer sx={{ mt: "20px", overflowX: "auto" }}>
        <Table sx={{ minWidth: "898px" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Page No</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Action</TableCell>
              <TableCell align="center">Mapping</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Boolean(isLoading)
              ? new Array(3).fill(null).map((_, idx) => {
                  return (
                    <TableRow key={`table-content-skeleton-${idx}`}>
                      <TableCell align="center" sx={{ maxWidth: "100px" }}>
                        <Skeleton
                          variant="rectangular"
                          sx={{
                            display: "inline-block",
                            width: "120px",
                            height: "90px",
                            borderRadius: "5px",
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton
                          variant="text"
                          sx={{ display: "inline-block", width: "100px" }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Skeleton
                          variant="text"
                          sx={{ display: "inline-block", width: "50px" }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Box
                          sx={{
                            display: "inline-flex",
                            gap: "12px",
                          }}
                        >
                          <Skeleton
                            variant="rounded"
                            sx={{ height: "20px", width: "20px" }}
                          />
                          <Skeleton
                            variant="rounded"
                            sx={{ height: "20px", width: "20px" }}
                          />
                        </Box>
                      </TableCell>
                      <TableCell align="center" sx={{ maxWidth: "100px" }}>
                        <Skeleton variant="rectangular" />
                      </TableCell>
                    </TableRow>
                  );
                })
              : paperPages?.map((page, idx) => {
                  return (
                    <TableRow>
                      <TableCell align="center" sx={{ maxWidth: "100px" }}>
                        <Box
                          sx={{
                            display: "inline-block",
                            width: "120px",
                            height: "90px",
                          }}
                        >
                          <Box
                            component="img"
                            src={page?.image}
                            sx={{ width: 1, height: 1, borderRadius: "5px" }}
                          />
                        </Box>
                      </TableCell>
                      <TableCell align="center">Page {page?.page_no}</TableCell>
                      <TableCell align="center">
                        {page?.page_category}
                      </TableCell>
                      <TableCell align="center">
                        <Box
                          sx={{
                            display: "inline-flex",
                            gap: "12px",
                          }}
                        >
                          <IconButton sx={{ p: 0, color: "textBlack" }}>
                            <VisibilityOutlinedIcon />
                          </IconButton>
                          <IconButton
                            sx={{ p: 0, color: "textBlack" }}
                            onClick={() => setDeleteItem(page?.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </TableCell>
                      <TableCell align="center" sx={{ maxWidth: "100px" }}>
                        <Button
                          sx={{
                            gap: "8.25px",
                            bgcolor: "#D9D9D9",
                            px: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <EditIcon
                            sx={{
                              width: "13.5px",
                              height: "13.5px",
                            }}
                          />
                          <Box component="span">Create Area Map</Box>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
        {Boolean(!paperPages?.length && !isLoading) && (
          <Alert severity="info">No page found!</Alert>
        )}
      </TableContainer>
      {Boolean(deleteItem) && (
        <DeleteDialog
          open={Boolean(deleteItem)}
          handleClose={handleDeleteItem}
        />
      )}
    </Box>
  );
};

export default EpaperPageList;
