import { Container, Hidden } from "@mui/material";
import React from "react";
import SectionTitle from "../common/SectionTitle";
import TestimonialRowDesktop from "./TestimonialRowDesktop";
import TestimonialRowMobile from "./TestimonialRowMobile";

export default function TestimonialRow() {
  return (
    <Container maxWidth="xl">
      <SectionTitle
        title="What People Have To Say"
        sxTitle={{ fontSize: "2rem", color: "white" }}
        sxBox={{ mb: 8 }}
      />
      <Hidden mdDown>
        <TestimonialRowDesktop />
      </Hidden>
      <Hidden mdUp>
        <TestimonialRowMobile />
      </Hidden>
    </Container>
  );
}
