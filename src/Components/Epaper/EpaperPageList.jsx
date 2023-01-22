import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const EpaperPageList = () => {
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
          <TableHead
            sx={{
              "& .MuiTableCell-root": {
                color: "textWhite",
                bgcolor: "color3.main",
              },
            }}
          >
            <TableRow>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Page No</TableCell>
              <TableCell align="center">Size</TableCell>
              <TableCell align="center">Action</TableCell>
              <TableCell align="center">Mapping</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiTableCell-root": {
                color: "textBlack",
                bgcolor: "color6.main",
              },
              "&>*:nth-of-type(even)": {
                "& .MuiTableCell-root": {
                  bgcolor: "color5.main",
                },
              },
            }}
          >
            <TableRow>
              <TableCell align="center" sx={{ maxWidth: "100px" }}>
                <Box
                  sx={{
                    display: "inline-block",
                    width: "104px",
                    height: "94px",
                  }}
                >
                  <Box
                    component="img"
                    src={"https://via.placeholder.com/104x94.png"}
                    sx={{ width: 1, height: 1, borderRadius: "5px" }}
                  />
                </Box>
              </TableCell>
              <TableCell align="center">Page 1</TableCell>
              <TableCell align="center">100 kb</TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    display: "inline-flex",
                    gap: "12px",
                  }}
                >
                  <VisibilityOutlinedIcon />
                  <DeleteIcon />
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
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EpaperPageList;
