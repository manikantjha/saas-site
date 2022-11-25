import { Typography } from "@mui/material";
import React from "react";

interface IFooterColTitleProps {
  title?: string;
}

export default function FooterColTitle(props: IFooterColTitleProps) {
  if (!props.title) return null;
  return (
    <Typography
      variant="h6"
      sx={{ color: "primary.main", fontWeight: "bold", mb: 2 }}
    >
      {props.title}
    </Typography>
  );
}
