import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import NewsImg from "../../Assets/NewsImg.png";
import { MdDelete } from "react-icons/md";

const ViewComments = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: "16px" }}>
        <Box>
          <Box
            component={"img"}
            src={NewsImg}
            sx={{ height: "280px", width: "424px" }}
          />
          <Typography
            color="textBody"
            sx={{ textAlign: "center", fontSize: "12px", mt: "4px" }}
          >
            Bangladesh | 16h
          </Typography>
        </Box>
        {/* text section 1 */}
        <Box>
          <Typography variant="h4" color="textBlack" sx={{ mb: "20px" }}>
            At 97, Malaysia's Mahathir vows one final fight against
            graft-tainted govt
          </Typography>
          <Typography sx={{ textAlign: "justify" }} color="textBlack">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. the Lorem Ipsum has been the industry's standard dummy
            text ever since the the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            type setting, remaining essentially unchanged. It was popular to
            rised in the 1960s with the release of Letraset sheets containing
            Lorem Lorem to Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem the Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type the
          </Typography>
        </Box>
        {/*  ------end------ */}
      </Box>
      {/* text section 2 */}
      <Box>
        <Typography color="textBlack" sx={{ mt: "2px", textAlign: "justify" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. the Lorem Ipsum has been the industry's standard dummy text
          the ever since the the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not to only five centuries, but also the leap into electronic type
          setting, remaining essentially unchanged. It was popular to rised in
          the 1960s with the release of Letraset sheets containing Lorem Lorem
          to Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem the Ipsum to has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type the thspecimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially lorem the lunchanged. It was lorem
          typeset popularised in the 1960s with the release of Letraset sheets
          containing Lorem to electronic typesetting.
        </Typography>
        <Typography
          color="textBlack"
          sx={{ mt: "20px", mb: "45px", textAlign: "justify" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. the Lorem Ipsum has been the industry's standard dummy text
          the ever since the the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not to only five centuries, but also the leap into electronic type
          setting, remaining essentially unchanged. It was popular to rised in
          the 1960s with the release of Letraset sheets containing Lorem Lorem
          to Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem the Ipsum to has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type the thspecimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially lorem the lunchanged. It was lorem
          typeset popularised in the 1960s with the release of Letraset sheets
          containing Lorem to electronic typesetting.
        </Typography>
      </Box>
      {/* ------end----- */}
      {/* random users comments */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
        }}
      >
        <Avatar sx={{ height: "34px", width: "34px" }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Typography variant="body4" sx={{ fontWeight: 600 }}>
              Rasel Hossian
            </Typography>
            <Typography variant="body5">10 Nov 22 at 9:10am</Typography>
          </Box>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever to tsince the 1500s, Lorem Ipsum is simply dummy text ever
            since the 1500s, Lorem Ipsum is simply dummy text of the printing
            and type setting of industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,
          </Typography>
          {/* comment button */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                borderRight: "1px solid black",
                pr: "12px",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Like 10
            </Typography>
            <Typography
              sx={{
                px: "12px",
                borderRight: "1px solid black",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Dislike 05
            </Typography>
            <Button
              variant="text"
              sx={{
                backgroundColor: "color4.main",
                ml: "12px",
                gap: "8px",
                fontSize: "14px",
                fontWeight: 700,
                height: "30px",
                width: "80px",
                color: "#D22943",
                "&:hover": {
                  backgroundColor: "#D9D9D9E6",
                },
              }}
            >
              <MdDelete />
              Delete
            </Button>
          </Box>
          {/* comment button end */}
        </Box>
      </Box>
      {/* -----end----- */}
    </Box>
  );
};

export default ViewComments;
