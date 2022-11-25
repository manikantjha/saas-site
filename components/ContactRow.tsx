import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";
import SectionTitle from "./common/SectionTitle";
import FeatureRow from "./featureRow/FeatureRow";

function RenderContactRowContent() {
  return (
    <Box>
      <TextField fullWidth placeholder="email" sx={{ mb: 2 }} />
      <TextField
        fullWidth
        multiline
        placeholder="message"
        rows={6}
        sx={{ mb: 4 }}
      />
      <Button variant="contained">Contact Us</Button>
    </Box>
  );
}

export default function ContactRow() {
  return (
    <Container maxWidth="xl">
      <SectionTitle title="Contact Us" />
      <FeatureRow
        src="/assets/images/contact_us.svg"
        alt="UI"
        isMirrored
        renderContent={() => <RenderContactRowContent />}
        hideImageInTabletView
      />
    </Container>
  );
}
