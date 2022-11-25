import { Avatar, Box, Paper, SxProps, Typography } from "@mui/material";
import React from "react";

interface ITestimonialCardProps {
  sxPaper?: SxProps;
}

export default function TestimonialCard(props: ITestimonialCardProps) {
  return (
    <Paper
      sx={{
        px: 6,
        py: 6,
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
        ...props.sxPaper,
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nam
          aut minima. Inventore aperiam dolore libero temporibus commodi
          praesentium mollitia impedit magni expedita eos. Voluptatum.
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ mr: 2 }} />
          <Typography variant="body1">Lorem, ipsum.</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
