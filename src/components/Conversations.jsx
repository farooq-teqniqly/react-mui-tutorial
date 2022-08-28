import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import LetterAvatar from "./LetterAvatar";
import ConversationData from "../conversationData";

export default function Conversations({ dataSource, title }) {
  return (
    <>
      <Typography variant="h6" fontWeight={100} mt={2}>
        {title}
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {ConversationData.map((item) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <LetterAvatar ariaConfig={{ ariaLabel: item.from.name }}>
                  item.from.avatarText
                </LetterAvatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.to}
                    </Typography>
                    {" — "}
                    {item.body}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </>
  );
}
