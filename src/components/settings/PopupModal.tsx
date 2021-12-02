import React from "react";

import { createStyles, makeStyles, Popover, PopoverProps, Theme } from "@mui/material";
import { Box, BoxProps, styled } from "@mui/system";

// const StyledPopup = styled((props: PopoverProps) => (
//   <Popover
//     anchorOrigin={{
//       vertical: "top",
//       horizontal: "center",
//     }}
//     transformOrigin={{
//       vertical: "bottom",
//       horizontal: "center",
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   "& .MuiPaper-root": {
//     maxWidth: 250,
//   },

//   "& .MuiList-root": {
//     padding: "0",
//   },

//   "& .MuiMenuItem-root": {
//     fontSize: 14,
//     padding: "0.8rem 0.5rem",
//   },

//   "& .MuiTypography-root": {
//     fontSize: 16,
//   },

//   "&. MuiListItemIcon-root": {
//     minWidth: 24,
//   },

//   "& .MuiSvgIcon-root": {
//     fontSize: 24,
//     color: theme.palette.text.secondary,
//   },
// }));

const StyledPopup = styled(Popover)<PopoverProps>(({ theme }) => ({
  "& .MuiPaper-root": {
    maxWidth: 250,
  },

  "& .MuiTypography-root": {
    fontSize: 16,
    // minWidth: 24,
  },

  "& .MuiSvgIcon-root": {
    fontSize: 24,
    color: theme.palette.text.secondary,
  },
}));

export const PopupModal: React.FC<PopoverProps> = ({ open, id, anchorEl, onClose, children }) => {
  return (
    <StyledPopup
      id={id}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      {children}
    </StyledPopup>
  );
};

// type Props = { children?: React.ReactNode };
// type Ref = HTMLDivElement;
