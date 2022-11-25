import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { lstFeatureCards } from "../../data/data";
import FeatureCard from "./FeatureCard";

export default function FeatureCardRowDesktop() {
  return (
    <Grid container spacing={2}>
      {lstFeatureCards.map((card) => (
        <Grid item xs={12} md={4} key={card.id}>
          <FeatureCard
            icon={card.icon}
            title={card.title}
            subtitle={card.subTitle}
            content={card.content}
            renderButton={() => <Button>Call to Action</Button>}
          />
        </Grid>
      ))}
    </Grid>
  );
}
