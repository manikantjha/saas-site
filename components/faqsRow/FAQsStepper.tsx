import {
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import { lstFAQsSteps } from "../../data/data";

interface IFAQsStepperProps {
  startPosition?: number;
  endPosition?: number;
}

function CustomStep(props: { index: number }) {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        height: 30,
        width: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {props.index}
    </Box>
  );
}

export default function FAQsStepper(props: IFAQsStepperProps) {
  return (
    <Box sx={{ maxWidth: { xs: "100%", md: "80%" } }}>
      <Stepper orientation="vertical">
        {lstFAQsSteps
          .slice(props.startPosition || 0, props.endPosition)
          .map((step) => (
            <Step key={step.label} expanded active>
              <StepLabel icon={<CustomStep index={step.id + 1} />}>
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
              </StepContent>
            </Step>
          ))}
      </Stepper>
    </Box>
  );
}
