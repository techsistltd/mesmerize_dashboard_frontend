import {
  Box,
  Button,
  Checkbox,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DeleteDialog from "../Shared/DeleteDialog";

const DashboardTable = ({ setViewNewsPost, setEditNews }) => {
  const [deleteProduct, setDeleteProduct] = useState(false);
  return (
    <Fragment>
      <TableContainer sx={{ my: "20px" }}>
        <Table
          sx={{
            minWidth: 650,
            "& .MuiTableHead-root": {
              textTransform: "uppercase",
            },
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Author</TableCell>
              <TableCell align="left">TITLE</TableCell>
              <TableCell align="center">CATEGORY</TableCell>
              <TableCell align="left">STATUS</TableCell>
              <TableCell align="left">IMAGE</TableCell>
              <TableCell align="left">DATE</TableCell>
              <TableCell align="center">VIEW</TableCell>
              <TableCell align="left">ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiTableCell-root": {
                paddingLeft: "10px",
              },
            }}
          >
            {new Array(5).fill(null).map((row, idx) => (
              <TableRow key={idx}>
                <TableCell align="left">#225</TableCell>
                <TableCell align="left">Forhad Ibn Haque</TableCell>
                <TableCell align="left">
                  Lorem Ipsum is simply dummy text of the printing and text...
                </TableCell>
                <TableCell align="center">Bangladesh</TableCell>
                <TableCell align="left">
                  <Button
                    variant={idx % 2 === 0 ? "button1" : "button2"}
                    sx={{ color: "textWhite" }}
                  >
                    {idx % 2 === 0 ? "Publish" : "Unpublish"}
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Box sx={{ width: "64px", height: "60px" }}>
                    <Box
                      component="img"
                      src="https://picsum.photos/200/200"
                      sx={{ height: 1, width: 1, borderRadius: "5px" }}
                    />
                  </Box>
                </TableCell>
                <TableCell align="left">15/06/2022</TableCell>
                <TableCell align="center">3k</TableCell>
                <TableCell align="left">
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <AiOutlineEye onClick={() => setViewNewsPost(idx + 1)} />
                    <FaPen onClick={() => setEditNews(idx + 1)} />
                    <MdDelete onClick={() => setDeleteProduct(true)} />
                    <DeleteDialog
                      open={deleteProduct}
                      handleClose={() => setDeleteProduct(null)}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>Showing 1 of 20 Results</Typography>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .Mui-selected": {
              backgroundColor: "#007098 !important",
              color: "white !important",
            },
          }}
        />
      </Box>
    </Fragment>
  );
};

export default DashboardTable;
