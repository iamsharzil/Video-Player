import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { useVideo } from "src/provider/VideoProvider";

import { SettingOptionType } from ".";

export const PlaybackSpeed: React.FC<{
  handleClick?: (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, type: SettingOptionType) => void;
  type: SettingOptionType;
}> = ({ handleClick, type }) => {
  const { video } = useVideo();

  const handlePlayBackspeed = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, speed: number) => {
    video.playbackRate = speed;
    handleClick(e, type);
  };

  return (
    <List dense component="nav" aria-label="main mailbox folders" sx={{ py: 0 }}>
      <ListItemButton onClick={(e) => handleClick(e, type)}>
        <ListItemIcon sx={{ minWidth: 24 }}>
          <KeyboardArrowLeft />
        </ListItemIcon>
        <ListItemText>Playback Speed</ListItemText>
      </ListItemButton>
      <Divider />

      {[2.5, 1.5, 1, 0.5].map((p, i) => (
        <ListItemButton key={i} selected={i === 3} onClick={(e) => handlePlayBackspeed(e, p)}>
          <ListItemText primary={p === 1 ? "Normal" : p + "x"} />
        </ListItemButton>
      ))}
    </List>
  );
};
