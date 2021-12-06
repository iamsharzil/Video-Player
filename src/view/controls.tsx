import React from "react";

import { css } from "@emotion/css";
import { OffVolume, FullVolume, Pause, Play } from "src/icons";

import { useVideo } from "src/provider/VideoProvider";

export const ControlsView: React.FC = () => {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        position: absolute;
        padding: 0.25rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7));
        visibility: visible;
        opacity: 1;
      `}
    >
      <TogglePlayPause />
      <ToggleVolume />
    </div>
  );
};

const TogglePlayPause: React.FC = () => {
  const { play } = useVideo();
  return (
    <div
      className={css`
        padding: 0.25rem;
        cursor: pointer;
      `}
    >
      {play ? <Pause /> : <Play />}
    </div>
  );
};

const ToggleVolume: React.FC = () => {
  const { mute } = useVideo();
  return (
    <div
      className={css`
        padding: 0.25rem;
        cursor: pointer;
      `}
    >
      {mute ? <OffVolume /> : <FullVolume />}
    </div>
  );
};
