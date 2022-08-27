import React from "react";
import { Box } from "@mui/material";
import ImageCard from "./ImageCard";

const FeedData = [
  {
    id: 1,
    image:
      "https://th.bing.com/th/id/R.7ef3b6f75e75910328190d821fa37fa6?rik=qAG3LPDqNSSvtA&pid=ImgRaw&r=0",
    text: "The Ford Edge is a great crossover!",
    altText: "Ford Edge",
    title: "Ford Edge",
    subheader: "It's fast and roomy!",
    avatarText: "FM",
    avatarAriaLabel: "Farooq Mahmud",
  },
  {
    id: 2,
    image:
      "https://th.bing.com/th/id/R.7ef3b6f75e75910328190d821fa37fa6?rik=qAG3LPDqNSSvtA&pid=ImgRaw&r=0",
    text: "The Ford Edge is a great crossover!",
    altText: "Ford Edge",
    title: "Ford Edge",
    subheader: "It's fast and roomy!",
    avatarText: "FM",
    avatarAriaLabel: "Farooq Mahmud",
  },
  {
    id: 3,
    image:
      "https://th.bing.com/th/id/R.7ef3b6f75e75910328190d821fa37fa6?rik=qAG3LPDqNSSvtA&pid=ImgRaw&r=0",
    text: "The Ford Edge is a great crossover!",
    altText: "Ford Edge",
    title: "Ford Edge",
    subheader: "It's fast and roomy!",
    avatarText: "FM",
    avatarAriaLabel: "Farooq Mahmud",
  },
  {
    id: 4,
    image:
      "https://th.bing.com/th/id/R.7ef3b6f75e75910328190d821fa37fa6?rik=qAG3LPDqNSSvtA&pid=ImgRaw&r=0",
    text: "The Ford Edge is a great crossover!",
    altText: "Ford Edge",
    title: "Ford Edge",
    subheader: "It's fast and roomy!",
    avatarText: "FM",
    avatarAriaLabel: "Farooq Mahmud",
  },
];
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
