import React from "react";
import { Box, Typography, AvatarGroup } from "@mui/material";
import Friends from "../friends";
import LetterAvatar from "./LetterAvatar";
import Gallery from "./Gallery";
import Conversations from "./Conversations";
import FeedData from "../feedData";

const colors = ["pink", "purple", "cyan"];

const selectBackgroundColor = (index) =>
  index > colors.length - 1 ? colors[0] : colors[index];

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={400}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5} sx={{ marginBottom: "20px" }}>
          {Friends.map((friend, index) => (
            <LetterAvatar
              key={friend.id}
              ariaConfig={{ ariaLabel: friend.ariaLabel }}
              backgroundColor={selectBackgroundColor(index)}
            >
              {friend.text}
            </LetterAvatar>
          ))}
        </AvatarGroup>
        <Gallery title="Latest Photos" dataSource={FeedData}></Gallery>
        <Conversations title="Latest Conversations"></Conversations>
      </Box>
    </Box>
  );
};
