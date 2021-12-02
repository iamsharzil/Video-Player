import React from "react";

import { VolumeDown, VolumeOff, VolumeUp, VolumeMute } from "@mui/icons-material";
import { Box, Button, Slider, Stack, Tooltip } from "@mui/material";

import { useVideo } from "src/provider/VideoProvider";

export const VolumeSlider: () => JSX.Element = () => {
  const { video, mute } = useVideo();

  /**
   * KEEP SLIDER VALUE BETWEEEN 0 - 100
   * 0 - MINIMUM
   * 100 - MAXIMUM
   */
  const [currentAudio, setCurrentAudio] = React.useState(100);
  const isMute = currentAudio === 0;

  const handleChange = (_event: Event, newValue: number | number[]) => {
    /**
     * MULTIPLY THE NUMBER BY 0.01 TO UPDATE THE VIDEO VOLUME
     * 0 - MUTE
     * 1 - MAX VOLUME
     */
    const updatedAudio = (newValue as number) * 0.01;
    video.volume = updatedAudio;
    setCurrentAudio(newValue as number);
  };

  const handleClick = () => {
    if (currentAudio === 0) {
      setCurrentAudio(100);
      video.volume = 1;
    }

    if (currentAudio >= 1) {
      setCurrentAudio(0);
      video.volume = 0;
    }
  };

  const VolumeIcon = () => {
    return mute ? (
      <VolumeOff />
    ) : currentAudio >= 1 && currentAudio <= 15 ? (
      <VolumeMute />
    ) : currentAudio >= 16 && currentAudio <= 50 ? (
      <VolumeDown />
    ) : !mute || currentAudio >= 51 ? (
      <VolumeUp />
    ) : null;
  };

  return (
    <Box
      width={150}
      sx={{
        marginLeft: "0 !important",
      }}
    >
      <Stack spacing={2} direction="row" alignItems="center">
        <Tooltip title={mute || isMute ? "Unmute" : "Mute"} placement="top">
          <Button onClick={handleClick} sx={{ minWidth: "unset" }}>
            <VolumeIcon />
          </Button>
        </Tooltip>

        <Slider aria-label="Volume" value={currentAudio} onChange={handleChange} />
      </Stack>
    </Box>
  );
};
