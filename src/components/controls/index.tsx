import React from "react";

import { Stack } from "@mui/material";
import { Box } from "@mui/system";

import { Settings } from "../settings";

import { FullScreen } from "./FullScreen";
import { PlayPause } from "./PlayPause";
import { VideoDuration } from "./VideoDuration";
import { VideoDurationLabel } from "./VideoDurationLabel";
import { VolumeSlider } from "./VolumeSlider";

type Props = { children: React.ReactNode };

export const Controls: React.FC = () => {
  const controls = true;

  return (
    <Box
      position="absolute"
      left={0}
      right={0}
      bottom={6}
      px={1}
      py={2}
      sx={{
        background: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
        visibility: controls ? "visible" : "hidden",
        opacity: controls ? 1 : 0,
      }}
    >
      <VideoDuration />
      <Stack spacing={2} direction="row" alignItems="center" justifyContent="space-between">
        <Stack spacing={2} direction="row" alignItems="center">
          <PlayPause />
          <VolumeSlider />
          <VideoDurationLabel />
        </Stack>
        <Stack spacing={2} direction="row" alignItems="center">
          <Settings />
          <FullScreen />
        </Stack>
      </Stack>
    </Box>
  );
};
