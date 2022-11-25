import { Box, Typography } from "@mui/material";
import React from "react";

interface IHowItWorksContentProps {
  title?: string;
  content?: string;
}

export default function HowItWorksContent(props: IHowItWorksContentProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5">{props.title}</Typography>
      <Typography variant="body1">{props.content}</Typography>
    </Box>
  );
}
