import React from "react";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Hls from "hls.js";

import { SettingOptionType } from ".";

const hls = new Hls();

const getVideoQuality = () => {
  hls.on(Hls.Events.MANIFEST_PARSED, function (_event, data) {
    console.log("manifest loaded, found " + data.levels.length + " quality level");
    console.log(data);
  });
};

export const VideoQuality: React.FC<{
  handleClick?: (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, type: SettingOptionType) => void;
  type: SettingOptionType;
}> = ({ handleClick, type }) => {
  return (
    <List dense component="nav" aria-label="main mailbox folders" sx={{ py: 0 }}>
      <ListItemButton
        onClick={(e) => {
          console.log("click");
          getVideoQuality();
          handleClick(e, type);
        }}
      >
        <ListItemIcon sx={{ minWidth: 24 }}>
          <KeyboardArrowLeft />
        </ListItemIcon>
        <ListItemText>Video Quality</ListItemText>
      </ListItemButton>
      <Divider />
      {["720", "480", "360", "240"].map((q, i) => (
        <ListItemButton key={i} selected={i === 3}>
          <ListItemText primary={q + "p"} />
        </ListItemButton>
      ))}
    </List>
  );
};
