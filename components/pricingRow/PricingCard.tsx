import { Button, Paper, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import { colors } from "../../data/constants";

interface IPricingCardProps {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  title: string;
  amount: number;
  duration: string;
  features: string[];
  id: number;
}

export default function PricingCard(props: IPricingCardProps) {
  return (
    <Paper
      sx={{
        px: 3,
        py: 6,
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
        bgcolor: props.id === 1 ? "secondary.main" : colors.bg.light,
        color: props.id === 1 ? "white" : "initial",
      }}
    >
      <props.icon
        color={props.id === 1 ? "primary" : "secondary"}
        sx={{ fontSize: "60px", mb: 1 }}
      />
      <Typography variant="h4" sx={{ mb: 2 }}>
        {props.title}
      </Typography>
      <Typography variant="h2" component="p">
        {props.amount}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        {props.duration}
      </Typography>
      <Button variant="contained" sx={{ mb: 3 }}>
        Call to Action
      </Button>
      <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
        Features
      </Typography>
      {props.features.map((feature, index) => (
        <Typography key={index} variant="body1">
          {feature}
        </Typography>
      ))}
    </Paper>
  );
}
