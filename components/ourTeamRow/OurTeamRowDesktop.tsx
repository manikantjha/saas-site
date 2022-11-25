import { Grid } from "@mui/material";
import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function OurTeamRowDesktop() {
  return (
    <Grid container spacing={2}>
      {[...Array(4)].map((_, index) => (
        <Grid item xs={12} md={3} key={index}>
          <TeamMemberCard />
        </Grid>
      ))}
    </Grid>
  );
}
