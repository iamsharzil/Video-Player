import React from "react";

import { Stack } from "@mui/material";
import { Box } from "@mui/system";

import { useVideo } from "src/provider/VideoProvider";

import useVideoControls from "src/hooks/useVideoControls";
import useVideoEvents from "src/hooks/useVideoEvents";

import { Settings } from "../settings";

import { FullScreen } from "./FullScreen";
import { PlayPause } from "./PlayPause";
import { VideoDuration } from "./VideoDuration";
import { VideoDurationLabel } from "./VideoDurationLabel";
import { VolumeSlider } from "./VolumeSlider";

type Props = { children: React.ReactNode };

const callAll =
  (...fns: any[]) =>
  (...args: any[]) =>
    fns.forEach((fn) => fn && fn(...args));

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

const Play: React.FC<Props> = ({ children }) => {
  const { handleOnPlay } = useVideoEvents();
  return (
    <React.Fragment>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: callAll(handleOnPlay, child.props.onClick) });
        }

        // @TODO
        // WHETHER TO ADD SUPPORT OF ONCLICK FOR NON REACT ELEMENTS

        return child; // string | boolean | number
      })}
    </React.Fragment>
  );
};

const Pause: React.FC<Props> = ({ children }) => {
  const { handleOnPause } = useVideoEvents();
  return (
    <React.Fragment>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: callAll(handleOnPause, child.props.onClick) });
        }
        return child;
      })}
    </React.Fragment>
  );
};

const Unmute: React.FC<Props> = ({ children }) => {
  const { toggleVideoMute } = useVideoControls();

  return (
    <React.Fragment>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: callAll(() => toggleVideoMute(false), child.props.onClick) });
        }
        return child;
      })}
    </React.Fragment>
  );
};

const Mute: React.FC<Props> = ({ children }) => {
  const { toggleVideoMute } = useVideoControls();

  return (
    <React.Fragment>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: callAll(() => toggleVideoMute(true), child.props.onClick) });
        }
        return child;
      })}
    </React.Fragment>
  );
};

export { Play, Pause, Mute, Unmute };
