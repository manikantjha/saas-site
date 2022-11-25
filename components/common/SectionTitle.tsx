import { Box, SxProps, Typography } from "@mui/material";
import React from "react";

export interface ISectionTitleProps {
  title?: string;
  sxTitle?: SxProps;
  sxBox?: SxProps;
}

export default function SectionTitle(props: ISectionTitleProps) {
  return (
    <Box
      sx={{
        textAlign: "center",
        mb: { xs: 6, md: 10 },
        ...props.sxBox,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "40px !important", md: "auto" },
          ...props.sxTitle,
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
}
