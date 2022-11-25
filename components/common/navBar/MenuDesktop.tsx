import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { lstNavMenu } from "../../../data/data";

export default function MenuDesktop() {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "end", flexGrow: 1 }}>
        {lstNavMenu.map((menuItem) => (
          <Link key={menuItem.id} href="#">
            <Typography
              variant="h6"
              component="div"
              sx={{ ml: 4, color: "black" }}
            >
              {menuItem.name}
            </Typography>
          </Link>
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ ml: 4, alignSelf: "" }}
      >
        Get Started
      </Button>
    </Box>
  );
}
