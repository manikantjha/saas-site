import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { lstNavMenu } from "../../../../data/data";

interface IMenuMobileListProps {
  handleClose: () => void;
}

export default function MenuMobileList(props: IMenuMobileListProps) {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={props.handleClose}
      onKeyDown={props.handleClose}
    >
      <List>
        {lstNavMenu.map((menuItem, index) => (
          <ListItem key={menuItem.id} disablePadding>
            <ListItemButton onClick={props.handleClose}>
              <ListItemText primary={menuItem.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
