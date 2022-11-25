import { Container } from "@mui/material";
import React from "react";
import SectionTitle, { ISectionTitleProps } from "../common/SectionTitle";
import FeatureRow from "../featureRow/FeatureRow";
import WhatMakesUsDifferentStepper from "./WhatMakesUsDifferentStepper";

interface IWhatMakesUsDifferentRow extends ISectionTitleProps {}

export default function WhatMakesUsDifferentRow(
  props: IWhatMakesUsDifferentRow
) {
  return (
    <Container maxWidth="xl">
      <SectionTitle title="What Makes Us Different" />
      <FeatureRow
        src="/assets/images/what_makes_us_different.svg"
        alt="What Makes Us Different"
        renderContent={() => <WhatMakesUsDifferentStepper />}
      />
    </Container>
  );
}
