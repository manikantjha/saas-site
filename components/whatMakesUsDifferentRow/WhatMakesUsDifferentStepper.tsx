import {
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import { lstWhatMakesUsDifferentSteps } from "../../data/data";

export default function WhatMakesUsDifferentStepper() {
  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Stepper orientation="vertical">
        {lstWhatMakesUsDifferentSteps.map((step) => (
          <Step key={step.id} expanded active>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
