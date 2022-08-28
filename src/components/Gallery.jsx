import React from "react";
import { ImageList, ImageListItem, Typography } from "@mui/material";

export default function Gallery({
  dataSource,
  title,
  cols = 3,
  rowHeight = 100,
  gap = 10,
}) {
  return (
    <>
      <Typography variant="h6" fontWeight={100}>
        {title}
      </Typography>
      <ImageList cols={cols} rowHeight={rowHeight} gap={gap}>
        {dataSource.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.image} alt={item.altText} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
