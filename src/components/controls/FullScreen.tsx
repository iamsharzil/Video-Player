import React from "react";

import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { Button, Tooltip } from "@mui/material";

import { useVideo } from "src/provider/VideoProvider";

import useVideoControls from "src/hooks/useVideoControls";

export const FullScreen: React.FC = () => {
  const { video, play } = useVideo();
  const { toggleFullScreen } = useVideoControls();

  const fullScreen = false;

  return (
    <Tooltip title={fullScreen ? "Exit Full Screen" : "Enter Full Screen"} placement="top">
      <Button onClick={() => toggleFullScreen(fullScreen ? false : true)}>
        {fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </Button>
    </Tooltip>
  );
};
