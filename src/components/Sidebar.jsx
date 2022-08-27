import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MenuItems from "../menuItems";

export const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        {MenuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton component="a" href={item.href}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.caption} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
