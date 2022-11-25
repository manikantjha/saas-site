import { Box, Container, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../common/SectionTitle";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialRowDesktop() {
  return (
    <Grid container spacing={2}>
      {[...Array(3)].map((_, index) => (
        <Grid item key={index} xs={12} md={4}>
          <TestimonialCard />
        </Grid>
      ))}
    </Grid>
  );
}
