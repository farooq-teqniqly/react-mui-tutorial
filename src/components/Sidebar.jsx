import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

import DarkMode from "@mui/icons-material/DarkMode";

import MenuItems from "../menuItems";

export const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {MenuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton component="a" href={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.caption} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <ListItemIcon>
              <DarkMode></DarkMode>
            </ListItemIcon>
            <Switch></Switch>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
