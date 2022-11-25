import { Box, Grid } from "@mui/material";
import React from "react";
import { lstBrandLogos } from "../../data/data";

export default function LogosRowDesktop() {
  return (
    <Grid container spacing={2}>
      {lstBrandLogos.map((logo) => (
        <Grid key={logo.id} item xs={12} md={3} lg={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
        </Grid>
      ))}
    </Grid>
  );
}
