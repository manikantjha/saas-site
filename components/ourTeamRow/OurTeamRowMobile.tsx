import { Box } from "@mui/material";
import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function OurTeamRowMobile() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", overflowX: "auto" }}>
      {[...Array(4)].map((_, index) => (
        <Box key={index}>
          <TeamMemberCard sxPaper={{ mr: 2, width: 275 }} />
        </Box>
      ))}
    </Box>
  );
}
