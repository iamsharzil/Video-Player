import React from "react";

import SettingsIcon from "@mui/icons-material/Settings";
import { Button, Tooltip } from "@mui/material";
import { Box } from "@mui/system";

import { useVideo } from "src/provider/VideoProvider";

import { OptionsLabel } from "./OptionsLabel";
import { PlaybackSpeed } from "./PlaybackSpeed";
import { PopupModal } from "./PopupModal";
import { VideoQuality } from "./VideoQuality";

enum Types {
  DEFAULT = "DEDAULT",
  "VIDEO QUALITY" = "VIDEO QUALITY",
  "PLAYBACK SPEED" = "PLAYBACK SPEED",
}

export type SettingOptionType = null | Types;

export const Settings: () => JSX.Element = () => {
  const [settingOptions, setSettingOptions] = React.useState<SettingOptionType>(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const { video } = useVideo();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setSettingOptions(Types.DEFAULT);
  };

  const handleSettingsOptions = (
    _event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>,
    type: SettingOptionType
  ) => {
    setSettingOptions(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <Tooltip title={"Settings"} placement="top">
        <Button
          id="Settings Button"
          aria-controls="Video Quality Change / Playback Speed Controls"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <SettingsIcon />
        </Button>
      </Tooltip>

      <PopupModal id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
        {settingOptions === Types.DEFAULT ? (
          <>
            <OptionsLabel
              label="Video Quality"
              defaultValue="Auto"
              handleClick={(e) => handleSettingsOptions(e, Types["VIDEO QUALITY"])}
              type={Types["VIDEO QUALITY"]}
            />
            <OptionsLabel
              label="Playback Speed"
              defaultValue={video?.playbackRate === 1 ? "Normal" : video.playbackRate + "x"}
              handleClick={(e) => handleSettingsOptions(e, Types["PLAYBACK SPEED"])}
              type={Types["PLAYBACK SPEED"]}
            />
          </>
        ) : settingOptions === Types["VIDEO QUALITY"] ? (
          <VideoQuality handleClick={(e) => handleSettingsOptions(e, Types.DEFAULT)} type={Types.DEFAULT} />
        ) : settingOptions === Types["PLAYBACK SPEED"] ? (
          <PlaybackSpeed handleClick={(e) => handleSettingsOptions(e, Types.DEFAULT)} type={Types.DEFAULT} />
        ) : null}
      </PopupModal>
    </Box>
  );
};
