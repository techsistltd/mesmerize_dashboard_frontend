import { Box, Typography } from "@mui/material";
import React from "react";
import NewsImg from "../../Assets/NewsImg.png";

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
        {/*Amcor hello */}
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
    </Box>
  );
};

export default ViewComments;
