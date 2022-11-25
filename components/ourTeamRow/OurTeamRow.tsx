import { Box, Container, Hidden } from "@mui/material";
import React from "react";
import SectionTitle from "../common/SectionTitle";
import OurTeamRowDesktop from "./OurTeamRowDesktop";
import OurTeamRowMobile from "./OurTeamRowMobile";

export default function OurTeamRow() {
  return (
    <Container maxWidth="xl">
      <SectionTitle title="Our Team" />
      <Hidden mdDown>
        <OurTeamRowDesktop />
      </Hidden>
      <Hidden mdUp>
        <OurTeamRowMobile />
      </Hidden>
    </Container>
  );
}
