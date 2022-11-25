import { Container, Hidden } from "@mui/material";
import FeatureCardRowDesktop from "./FeatureCardRowDesktop";
import FeatureCardRowMobile from "./FeatureCardRowMobile";

export default function FeatureCardRow() {
  return (
    <Container maxWidth="xl">
      <Hidden mdDown>
        <FeatureCardRowDesktop />
      </Hidden>
      <Hidden mdUp>
        <FeatureCardRowMobile />
      </Hidden>
    </Container>
  );
}
