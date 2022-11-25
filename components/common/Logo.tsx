import { IconButton } from "@mui/material";
import React from "react";

export default function Logo() {
  return (
    <IconButton
      size="large"
      edge="start"
      aria-label="menu"
      sx={{ mr: 2, color: "primary.main" }}
    >
      C350
    </IconButton>
  );
}
