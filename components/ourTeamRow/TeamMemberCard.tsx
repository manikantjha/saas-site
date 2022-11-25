import { Box, Paper, SxProps, Typography } from "@mui/material";
import React from "react";

interface ITeamMemberCardProps {
  sxPaper?: SxProps;
}

export default function TeamMemberCard(props: ITeamMemberCardProps) {
  return (
    <Paper
      sx={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px", ...props.sxPaper }}
    >
      <Box
        sx={{
          width: "100%",
          height: 300,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <img
          src="/assets/images/avatar.svg"
          alt="Avatar"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </Box>
      <Box sx={{ textAlign: "center", py: 3, px: 3 }}>
        <Typography variant="h5" component="p" sx={{ mb: 1 }}>
          Lorem, ipsum.
        </Typography>
        <Typography variant="body1" sx={{ mb: 0.5 }}>
          Lorem, ipsum.
        </Typography>
        <Typography variant="body1" sx={{ mb: 0.5 }}>
          Lorem, ipsum dolor.
        </Typography>
      </Box>
    </Paper>
  );
}
