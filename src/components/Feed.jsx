import React from "react";
import { Box } from "@mui/material";
import ImageCard from "./ImageCard";

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <ImageCard
        image="https://th.bing.com/th/id/R.7ef3b6f75e75910328190d821fa37fa6?rik=qAG3LPDqNSSvtA&pid=ImgRaw&r=0"
        text="The Ford Edge is a great crossover!"
        altText="Ford Edge"
        title="Ford Edge"
        subheader="It's fast and roomy!"
        avatarText="FM"
        avatarAriaLabel="Farooq Mahmud"
      ></ImageCard>
    </Box>
  );
};
