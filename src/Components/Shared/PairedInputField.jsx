import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { GrAddCircle } from "react-icons/gr";

const PairedInputField = ({
  firstField = "",
  secondField = "",
  onSubmit = () => null,
}) => {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");

  const handleSubmit = () => {
    const data = {
      [firstField]: field1,
      [secondField]: field2,
    };

    onSubmit(data);
    setField1("");
    setField2("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <TextField
        placeholder={firstField?.replace("_", " ")}
        value={field1}
        onChange={(e) => setField1(e.target.value)}
        sx={{
          border: 1,
          borderColor: "primary.main",
          width: "350px",
          borderRadius: "5px",
          mt: "10px",
          height: "40px",
          "& .MuiInputBase-input": {
            padding: "7px",
          },
        }}
      />
      <TextField
        type={"number"}
        placeholder={secondField?.replace("_", " ")}
        value={field2}
        onChange={(e) => setField2(e.target.value)}
        sx={{
          border: 1,
          borderColor: "primary.main",
          width: "350px",
          borderRadius: "5px",
          mt: "10px",
          height: "40px",
          "& .MuiInputBase-input": {
            padding: "7px",
          },
        }}
      />
      <IconButton onClick={handleSubmit} sx={{ p: 0 }}>
        <GrAddCircle
          style={{
            fontSize: "20px",
            marginTop: "15px",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default PairedInputField;
