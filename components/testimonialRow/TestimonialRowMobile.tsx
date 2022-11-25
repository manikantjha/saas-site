import { Box } from "@mui/material";
import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialRowMobile() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", overflowX: "auto" }}>
      {[...Array(3)].map((_, index) => (
        <Box key={index}>
          <TestimonialCard sxPaper={{ mr: 2, width: 275, p: 3 }} />
        </Box>
      ))}
    </Box>
  );
}
