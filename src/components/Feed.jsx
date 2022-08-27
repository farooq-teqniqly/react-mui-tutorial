import React from "react";
import { Box } from "@mui/material";
import ImageCard from "./ImageCard";
import FeedData from "../feedData";

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {FeedData.map((item) => (
        <ImageCard
          key={item.id}
          image={item.image}
          text={item.text}
          altText={item.altText}
          title={item.title}
          subheader={item.subheader}
          avatarText={item.avatarText}
          avatarAriaLabel={item.avatarAriaLabel}
        ></ImageCard>
      ))}
    </Box>
  );
};
