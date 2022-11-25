import { Box, Grid } from "@mui/material";
import React from "react";
import { lstBrandLogos } from "../../data/data";

export default function LogosRowMobile() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", overflowX: "auto" }}>
      {lstBrandLogos.map((logo) => (
        <Box
          key={logo.id}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: { xs: 2, md: 0 },
          }}
        >
          <Box sx={{ height: 100, width: "auto", overflow: "hidden" }}>
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
