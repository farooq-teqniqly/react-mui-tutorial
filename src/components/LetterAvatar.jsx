import React from "react";
import { styled, Avatar } from "@mui/material";

const StyledAvatar = styled(Avatar)({
  backgroundColor: "orange",
  width: 30,
  height: 30,
  fontSize: "small",
});

export default function LetterAvatar({ clickHandler, ariaConfig, children }) {
  return (
    <StyledAvatar onClick={clickHandler} aria-label={ariaConfig?.ariaLabel}>
      {children}
    </StyledAvatar>
  );
}
