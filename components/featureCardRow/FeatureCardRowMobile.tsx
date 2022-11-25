import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { lstFeatureCards } from "../../data/data";
import FeatureCard from "./FeatureCard";

export default function FeatureCardRowMobile() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", overflowX: "auto" }}>
      {lstFeatureCards.map((card) => (
        <Box key={card.id} sx={{ pb: 4 }}>
          <FeatureCard
            sxPaper={{ width: 275, mx: 1 }}
            icon={card.icon}
            title={card.title}
            subtitle={card.subTitle}
            content={card.content}
            renderButton={() => <Button>Call to Action</Button>}
          />
        </Box>
      ))}
    </Box>
  );
}
