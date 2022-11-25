import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { lstFooterCols } from "../../../data/data";
import Logo from "../Logo";
import FooterCol from "./FooterCol";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function FooterLogoCol() {
  return (
    <>
      <Logo />
      <Typography variant="body1" sx={{ mb: 2 }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        dolorem repudiandae, quasi totam voluptatum earum quaerat, magnam fugiat
        fugit atque rem, omnis quidem nostrum officiis.
      </Typography>
      <Typography variant="body1">&copy; 2022 Commerce 350</Typography>
    </>
  );
}

function FooterSocialCol() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <FacebookIcon sx={{ mr: 2 }} />
        <InstagramIcon sx={{ mr: 2 }} />
        <TwitterIcon />
      </Box>
    </>
  );
}

export default function Footer() {
  return (
    <Box sx={{ py: 10, bgcolor: "secondary.main", color: "white" }}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <FooterCol colData={() => <FooterLogoCol />} />
          </Grid>
          {lstFooterCols.map((footerCol) => (
            <Grid key={footerCol.id} item xs={12} md={2}>
              <FooterCol
                colTitle={footerCol.colTitle}
                colData={footerCol.colLinks}
              />
            </Grid>
          ))}
          <Grid item xs={12} md={4}>
            <FooterCol colTitle="Social" colData={() => <FooterSocialCol />} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
