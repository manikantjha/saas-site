import { Box } from "@mui/material";
import React from "react";
import SectionTitle from "../common/SectionTitle";
import FeatureRow from "../featureRow/FeatureRow";
import HowItWorksContent from "./HowItWorksContent";

export default function HowItWorksRow() {
  return (
    <Box>
      <SectionTitle title="How It Works" />
      <FeatureRow
        src="/assets/images/how_it_works.svg"
        alt="UI"
        isMirrored
        renderContent={() => (
          <>
            <HowItWorksContent
              title="Lorem, ipsum."
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam iusto alias aperiam necessitatibus maxime totam vero iste obcaecati numquam."
            />
          </>
        )}
      />
    </Box>
  );
}
