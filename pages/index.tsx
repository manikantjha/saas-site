import { Box, Button, ThemeProvider } from "@mui/material";
import Footer from "../components/common/footer/Footer";
import NavBar from "../components/common/navBar/NavBar";
import RowWrapper from "../components/common/RowWrapper";
import CompanyLogosRow from "../components/companyLogosRow/CompanyLogosRow";
import ContactRow from "../components/ContactRow";
import FAQsRow from "../components/faqsRow/FAQsRow";
import FeatureCardRow from "../components/featureCardRow/FeatureCardRow";
import FeatureRow from "../components/featureRow/FeatureRow";
import Hero from "../components/Hero";
import HowItWorksRow from "../components/howItWorksRow/HowItWorksRow";
import OurTeamRow from "../components/ourTeamRow/OurTeamRow";
import PricingRow from "../components/pricingRow/PricingRow";
import TestimonialRow from "../components/testimonialRow/TestimonialRow";
import WhatMakesUsDifferentRow from "../components/whatMakesUsDifferentRow/WhatMakesUsDifferentRow";
import { colors } from "../data/constants";
import theme from "../theme/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <NavBar />
        <Hero />
        <RowWrapper sxWrapperContainer={{ bgcolor: colors.bg.extraLight }}>
          <CompanyLogosRow />
        </RowWrapper>
        <RowWrapper sxWrapperContainer={{ bgcolor: "white", color: "black" }}>
          <FeatureRow
            src="/assets/images/feature_01.svg"
            alt="UI"
            title="Lorem ipsum dolor sit amet."
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ratione sunt optio accusantium corporis ipsa excepturi quasi delectus velit molestiae recusandae odio provident, deleniti quibusdam sed dolorum amet molestias iste!"
            renderButton={() => {
              return <Button variant="contained">Call to Action</Button>;
            }}
            sxContainerMain={{ pr: { xs: 0, md: 3 } }}
          />
        </RowWrapper>
        <RowWrapper sxWrapperContainer={{ bgcolor: colors.bg.extraLight,color: "black" }}>
          <FeatureRow
            isMirrored
            src="/assets/images/feature_02.svg"
            alt="UI"
            title="Lorem ipsum dolor sit amet."
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ratione sunt optio accusantium corporis ipsa excepturi quasi delectus velit molestiae recusandae odio provident, deleniti quibusdam sed dolorum amet molestias iste!"
            renderButton={() => {
              return <Button variant="contained">Call to Action</Button>;
            }}
            sxContainerMain={{ pl: { xs: 0, md: 3 } }}
          />
        </RowWrapper>
        <RowWrapper sxWrapperContainer={{ bgcolor: "white", color: "black" }}>
          <FeatureRow
            src="/assets/images/feature_03.svg"
            alt="UI"
            title="Lorem ipsum dolor sit amet."
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ratione sunt optio accusantium corporis ipsa excepturi quasi delectus velit molestiae recusandae odio provident, deleniti quibusdam sed dolorum amet molestias iste!"
            renderButton={() => {
              return <Button variant="contained">Call to Action</Button>;
            }}
            sxContainerMain={{ pr: { xs: 0, md: 3 } }}
          />
        </RowWrapper>
        <RowWrapper sxWrapperContainer={{ bgcolor: colors.bg.extraLight,color: "black" }}>
          <FeatureCardRow />
        </RowWrapper>
        <RowWrapper sxWrapperContainer={{ bgcolor: "white", color: "black" }}>
          <WhatMakesUsDifferentRow />
        </RowWrapper>
        <RowWrapper
          sxWrapperContainer={{
            bgcolor: colors.bg.extraLight,
            textAlign: "center",
            color: "black"
          }}
        >
          <PricingRow />
        </RowWrapper>
        <RowWrapper sxWrapperContainer={{ bgcolor: "white", color: "black" }}>
          <FAQsRow />
        </RowWrapper>
        <RowWrapper sxWrapperContainer={{ bgcolor: colors.bg.extraLight, color: "black" }}>
          <OurTeamRow />
        </RowWrapper>
        <RowWrapper sxWrapperContainer={{ bgcolor: "white", color: "black" }}>
          <HowItWorksRow />
        </RowWrapper>
        <RowWrapper sxWrapperContainer={{ bgcolor: "primary.main" }}>
          <TestimonialRow />
        </RowWrapper>
        <RowWrapper sxWrapperContainer={{ bgcolor: "white", color: "black" }}>
          <ContactRow />
        </RowWrapper>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
