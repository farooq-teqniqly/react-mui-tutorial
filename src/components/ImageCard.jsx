import React from "react";
import {
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@mui/material";
import { FavoriteBorder, Favorite, Share } from "@mui/icons-material";
import LetterAvatar from "./LetterAvatar";

export default function ImageCard({
  image,
  text,
  altText,
  title,
  subheader,
  avatarText,
  avatarAriaLabel,
}) {
  return (
    <Card sx={{ margin: "20px" }}>
      <CardHeader
        avatar={
          <LetterAvatar ariaConfig={{ ariaLabel: avatarAriaLabel }}>
            {avatarText}
          </LetterAvatar>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia component="img" height="20%" image={image} alt={altText} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          ></Checkbox>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
