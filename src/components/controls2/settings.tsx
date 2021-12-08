import React from "react";

import { css, cx } from "@emotion/css";
import { LeftArrowIcon, SettingsIcon } from "src/icons";

import { useDispatchSettings, useSettings } from "src/provider/SettingsProvider";

import { SettingStatus } from "src/reducer/settings";

import { Button } from "../Button";
import { List } from "../List";
import { ListItem } from "../ListItem";

const settingOptions = [
  {
    id: 0,
    title: "Playback Speed",
    values: [2.5, 1.5, 1, 0.5],
  },
  {
    id: 1,
    title: "Quality",
    values: ["720p", "480p", "360p", "240p"],
  },
];

export const BaseSettings: () => JSX.Element = () => {
  const { open } = useSettings();
  const dispatch = useDispatchSettings();

  return (
    <>
      <Button
        aria-label="Settings"
        aria-expanded={open}
        onClick={() =>
          dispatch({
            type: SettingStatus.TOGGLE_SETTINGS,
            payload: {
              open: !open,
              playback: false,
              videoQuality: false,
            },
          })
        }
      >
        <SettingsIcon width="2rem" />
      </Button>
      <SettingOptions />
    </>
  );
};

export type DivProps = React.HTMLAttributes<HTMLDivElement>;

const SettingOptions: React.FC<DivProps> = ({ className }) => {
  const { open, playback, videoQuality } = useSettings();
  const dispatch = useDispatchSettings();

  const isSettingOptionVisible = open || playback || videoQuality;

  const styles = cx([
    css`
      width: 250px;
      /* height: 90px; */
      bottom: 3rem;
      background: rgba(28, 28, 28, 0.9);
      border-radius: 2px;
      position: absolute;
      right: 1rem;
      display: ${isSettingOptionVisible ? "block" : "none"};
      transition: opacity 0.1s cubic-bezier(0, 0, 0.2, 1);
      font-size: inherit;
    `,
    className,
  ]);

  return (
    <div className={styles}>
      <List visible={open}>
        <ListItem
          title="Playback Speed"
          value="Normal"
          onClick={() =>
            dispatch({
              type: SettingStatus.TOGGLE_PLAYBACK,
              payload: { open: false, playback: true, videoQuality: false },
            })
          }
        />
        <ListItem
          title="Video Quality"
          value="360p"
          onClick={() =>
            dispatch({
              type: SettingStatus.TOGGLE_VIDEO_QUALITY,
              payload: { open: false, playback: false, videoQuality: true },
            })
          }
        />
      </List>

      <PlaybackSpeed />
      <VideoQuality />
    </div>
  );
};

const PlaybackSpeed: () => JSX.Element = () => {
  const { playback } = useSettings();
  const dispatch = useDispatchSettings();

  if (!playback) return <></>;

  return (
    <>
      <div
        className={css`
          display: flex;
          align-items: center;
          color: #fff;
          padding: 0.8rem 0.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.7);
        `}
        onClick={() =>
          dispatch({
            type: SettingStatus.TOGGLE_PLAYBACK,
            payload: { open: true, playback: false, videoQuality: false },
          })
        }
      >
        <LeftArrowIcon width={"1.5rem"} />
        <span className={css``}>Video Quality</span>
      </div>
      <List visible={playback}>
        {settingOptions[0].values.map((value, index) => (
          <ListItem key={index} title={value.toString()} />
        ))}
      </List>
    </>
  );
};

const VideoQuality: () => JSX.Element = () => {
  const { videoQuality } = useSettings();
  const dispatch = useDispatchSettings();

  if (!videoQuality) return <></>;

  return (
    <>
      <div
        className={css`
          display: flex;
          align-items: center;
          color: #fff;
          padding: 0.8rem 0.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.7);
        `}
        onClick={() =>
          dispatch({
            type: SettingStatus.TOGGLE_VIDEO_QUALITY,
            payload: { open: true, playback: false, videoQuality: false },
          })
        }
      >
        <LeftArrowIcon width={"1.5rem"} />
        <span className={css``}>Video Quality</span>
      </div>
      <List visible={videoQuality}>
        {settingOptions[1].values.map((value, index) => (
          <ListItem key={index} title={value.toString()} />
        ))}
      </List>
    </>
  );
};
