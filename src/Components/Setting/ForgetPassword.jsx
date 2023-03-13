import { Box, Button, InputLabel, TextField } from "@mui/material";
import React, { useState } from "react";

const ForgetPassword = () => {
  const [updated, setUpdated] = useState("");
  function handleEmailSubmit() {
    console.log("email:", updated);
    setUpdated("");
  }

  return (
    <Box sx={{ display: "flex", gap: "30px" }}>
      {/* forget password */}
      <Box>
        <InputLabel
          htmlFor="form-input-email"
          sx={{
            color: "textBlack",
          }}
        >
          Please Enter Your Registered Email
        </InputLabel>
        <TextField
          fullWidth
          name="email"
          type={"email"}
          value={updated}
          onChange={(e) => setUpdated(e.target.value)}
          id="form-input-email"
          variant="outlined"
          placeholder="Enter Your Mail "
          sx={{
            border: 1,
            borderColor: "primary.main",
            height: "40px",
            width: "356px",
            borderRadius: "5px",
            mt: "10px",
            "& .MuiInputBase-input": {
              padding: "6px 11px 9px 11px",
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "end" }}>
        <Button
          variant="button3"
          sx={{ height: "40px" }}
          onClick={handleEmailSubmit}
        >
          Send
        </Button>
      </Box>
      {/* forget password end */}
    </Box>
  );
};

export default ForgetPassword;
