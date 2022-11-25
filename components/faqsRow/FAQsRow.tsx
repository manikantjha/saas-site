import { Container, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../common/SectionTitle";
import FAQsStepper from "./FAQsStepper";

export default function FAQsRow() {
  return (
    <Container maxWidth="xl">
      <SectionTitle title="FAQs" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FAQsStepper startPosition={0} endPosition={3} />
        </Grid>
        <Grid item xs={12} md={6}>
          <FAQsStepper startPosition={3} />
        </Grid>
      </Grid>
    </Container>
  );
}
