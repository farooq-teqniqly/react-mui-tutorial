import React from "react";
import { Avatar } from "@mui/material";

export default function LetterAvatar({
  clickHandler,
  ariaConfig,
  backgroundColor = "orange",
  children,
}) {
  return (
    <Avatar
      onClick={clickHandler}
      aria-label={ariaConfig?.ariaLabel}
      sx={{
        backgroundColor: backgroundColor,
        width: 30,
        height: 30,
        fontSize: "small",
      }}
    >
      {children}
    </Avatar>
  );
}
