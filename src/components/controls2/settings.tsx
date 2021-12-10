import React from "react";

import { css, cx } from "@emotion/css";
import { LeftArrowIcon, SettingsIcon } from "src/icons";

import { useDispatchSettings, useSettings } from "src/provider/SettingsProvider";
import { useDispatchVideo, useVideo } from "src/provider/VideoProvider";

import { VideoStatus } from "src/reducer/video";

import { Button } from "../Button";
import { List } from "../List";
import { ListItem } from "../ListItem";

export const BaseSettings: () => JSX.Element = () => {
  const { open } = useSettings();
  const { handleSettingsClick } = useDispatchSettings();

  return (
    <>
      <Button
        aria-label="Settings"
        aria-expanded={open}
        onClick={() => {
          handleSettingsClick(!open, "none");
        }}
      >
        <SettingsIcon width="2rem" />
      </Button>
      <SettingOptions />
    </>
  );
};

export type DivProps = React.HTMLAttributes<HTMLDivElement>;

const SettingOptions: React.FC<DivProps> = ({ className }) => {
  const { open, activeSetting } = useSettings();
  const { handleSettingsClick } = useDispatchSettings();

  const { video, videoQuality: videoQualities, selectedQuality } = useVideo();

  // const [videoQualities, setVideoQualities] = React.useState([]);

  const isSettingOptionVisible = open || activeSetting !== "none";

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

  const playbackValue = video?.playbackRate === 1 ? "Normal" : `${video?.playbackRate}x`;
  const selectedVideoQuality = videoQualities?.find((v) => v.value === selectedQuality);
  const videoQualityValue = selectedVideoQuality?.label === "Auto" ? "Auto" : `${selectedVideoQuality?.label}p`;

  return (
    <div className={styles}>
      <List visible={open}>
        <ListItem
          title="Playback Speed"
          value={playbackValue}
          onClick={() => {
            handleSettingsClick(false, "playback");
          }}
        />
        <ListItem
          title="Video Quality"
          value={videoQualityValue}
          onClick={() => {
            handleSettingsClick(false, "videoQuality");
          }}
        />
      </List>
      <PlaybackSpeed />
      {videoQualities.length ? <VideoQuality videoQualities={videoQualities} /> : null}
    </div>
  );
};

const PlaybackSpeed: () => JSX.Element = () => {
  const { video } = useVideo();
  const { activeSetting } = useSettings();
  const { handleSettingsClick } = useDispatchSettings();

  const isPlaybackActive = activeSetting === "playback";

  if (!isPlaybackActive) return <></>;

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
        onClick={() => handleSettingsClick(true, "none")}
      >
        <LeftArrowIcon width={"1.5rem"} />
        <span className={css``}>Playback Speed</span>
      </div>
      <List visible={isPlaybackActive}>
        {[2.5, 1.5, 1, 0.5].map((value, index) => {
          const handlePlaybackClick = () => {
            video.playbackRate = +value;
            handleSettingsClick(true, "none");
          };

          return (
            <ListItem
              key={index}
              title={value.toString()}
              onClick={handlePlaybackClick}
              className={css`
                font-weight: ${video.playbackRate === +value ? "bold" : "none"};
              `}
            />
          );
        })}
      </List>
    </>
  );
};

const VideoQuality: React.FC<{
  videoQualities: Array<{
    value: string | number;
    label: string | number;
  }>;
}> = ({ videoQualities }) => {
  const { hls, selectedQuality } = useVideo();
  const { activeSetting } = useSettings();
  const dispatch = useDispatchVideo();
  const { handleSettingsClick } = useDispatchSettings();

  const isVideoQualityActive = activeSetting === "videoQuality";

  if (!isVideoQualityActive) return <></>;

  console.log("called 2", hls.currentLevel, hls.nextLevel, hls.nextLoadLevel, selectedQuality);

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
        onClick={() => {
          handleSettingsClick(true, "none");
        }}
      >
        <LeftArrowIcon width={"1.5rem"} />
        <span className={css``}>Video Quality</span>
      </div>
      <List visible={isVideoQualityActive}>
        {videoQualities.map(({ label, value }, index) => {
          const handleVideoQualityClick = () => {
            if (selectedQuality !== value) {
              dispatch({ type: VideoStatus.CHANGE_VIDEO_QUALITY, payload: { selectedQuality: +value } });
              hls.currentLevel = +value;
            }
            handleSettingsClick(true, "none");
          };

          return (
            <ListItem
              key={index}
              title={label === "Auto" ? label : `${label}p`}
              onClick={handleVideoQualityClick}
              className={css`
                font-weight: ${selectedQuality === +value ? "bold" : "none"};
              `}
            />
          );
        })}
      </List>
    </>
  );
};
