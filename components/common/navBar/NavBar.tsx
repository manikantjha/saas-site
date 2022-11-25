import { Container, Hidden } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./menuMobile/MenuMobile";
import Logo from "../Logo";

export default function NavBar() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "white" }}>
      <Toolbar>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Logo />
            <Hidden mdDown>
              <MenuDesktop />
            </Hidden>
            <Hidden mdUp>
              <MenuMobile />
            </Hidden>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
