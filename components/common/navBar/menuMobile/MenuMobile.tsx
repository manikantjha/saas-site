import { Box, Drawer, IconButton } from "@mui/material";
import React from "react";
import MenuMobileList from "./MenuMobileList";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuMobile() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Box>
      <IconButton onClick={() => setIsOpen(true)}>
        <MenuIcon sx={{ color: "primary.main" }} />
      </IconButton>
      {isOpen && (
        <Drawer anchor="left" open={isOpen} onClose={handleClose}>
          <MenuMobileList handleClose={handleClose} />
        </Drawer>
      )}
    </Box>
  );
}
