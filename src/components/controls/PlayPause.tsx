import React from "react";

import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Button, Tooltip } from "@mui/material";

import { useVideo } from "src/provider/VideoProvider";

import useVideoControls from "src/hooks/useVideoControls";

export const PlayPause: React.FC = () => {
  const { play } = useVideo();
  const { toggleVideoPlay } = useVideoControls();

  return (
    <Tooltip title={play ? "Pause" : "Play"} placement="top">
      <Button onClick={toggleVideoPlay}>{play ? <PauseIcon /> : <PlayArrowIcon />}</Button>
    </Tooltip>
  );
};
