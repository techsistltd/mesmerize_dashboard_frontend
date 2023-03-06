import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  InputLabel,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import React from "react";
import { useState } from "react";
import axiosApi from "../../Utils/axiosApi";

const ManageCategories = ({ handleClose, item }) => {
  const [value, setValue] = useState(item?.title ?? "");
  const [thumbnail, setThumbnail] = useState("");
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const { mutate: postCategory, isLoading: mutationLoading } = useMutation(
    (payload) =>
      axiosApi[Boolean(item?.id) ? "patch" : "post"](
        `/dashboard/categories${Boolean(item?.id) ? "/" + item?.slug : ""}/`,
        payload,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      ),
    {
      onSuccess: () => {
        enqueueSnackbar(
          `Successfully ${Boolean(item?.id) ? "Update" : "Create"} category`,
          {
            variant: "success",
          }
        );
        queryClient.invalidateQueries(["/dashboard/categories/"]);
        handleClose();
      },
      onError: (e) => {
        enqueueSnackbar("Something went wrong", {
          variant: "error",
        });
      },
    }
  );

  const handleSubmit = () => {
    const payload = {
      title: value,
    };

    if (Boolean(thumbnail)) {
      payload.thumbnail = thumbnail;
    }

    postCategory(payload);
  };

  return (
    <Modal open={Boolean(item)} onClose={handleClose}>
      <Paper
        sx={{
          minWidth: "600px",
          padding: "20px",
          mt: "30px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="body4"
          sx={{
            position: "relative",
            "&:after": {
              content: `""`,
              position: "absolute",
              width: "72px",
              height: "2px",
              bgcolor: "textBlack",
              bottom: "-10px",
              left: 0,
              mx: "auto",
            },
          }}
        >
          {Boolean(item?.id) ? "Update" : "Create"} New Categories
        </Typography>
        <Box
          sx={{
            mt: "40px",
          }}
        >
          <InputLabel
            htmlFor="form-input-categories"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            Categories Name
          </InputLabel>
          <TextField
            fullWidth
            id="form-input-thumnail"
            type={"text"}
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter categories name"
            sx={{
              border: 1,
              borderColor: "primary.main",
              width: 1,
              height: "40px",
              borderRadius: "5px",
              mt: "10px",
              "& .MuiInputBase-input": {
                padding: "8px",
              },
            }}
          />
        </Box>
        <Box sx={{ mt: "30px" }}>
          <InputLabel
            htmlFor="form-input-categories"
            sx={{
              color: "textBlack",
              fontSize: "16px",
            }}
          >
            Thumnail
          </InputLabel>
          <TextField
            fullWidth
            id="form-input-thumnail"
            type={"file"}
            variant="outlined"
            onChange={(e) => setThumbnail(e.target.files[0])}
            placeholder="Enter categories name"
            sx={{
              border: 1,
              borderColor: "primary.main",
              width: 1,
              height: "40px",
              borderRadius: "5px",
              mt: "10px",
              "& .MuiInputBase-input": {
                padding: "8px",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <LoadingButton
            loading={mutationLoading}
            disabled={!Boolean(value)}
            onClick={() => handleSubmit()}
            variant="button3"
            sx={{
              mt: "35px",
            }}
          >
            {Boolean(item?.id) ? "Update" : "Create"}
          </LoadingButton>
          <Button
            color="error"
            variant="contained"
            sx={{
              mt: "35px",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default ManageCategories;
