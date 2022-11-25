import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { lstPricingPlans } from "../../data/data";
import SectionTitle from "../common/SectionTitle";
import PricingCard from "./PricingCard";

export default function PricingRow() {
  return (
    <Container maxWidth="xl">
      <SectionTitle title="Plans & Pricing" />
      <Grid container spacing={2}>
        {lstPricingPlans.map((plan) => {
          return (
            <Grid key={plan.id} item xs={12} md={4}>
              <PricingCard {...plan} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
