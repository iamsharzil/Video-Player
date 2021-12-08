import { css, cx } from "@emotion/css";
import { PlayIcon, PauseIcon, OffVolumeIcon, FullVolumeIcon, FullScreenIcon, FullScreenExitIcon } from "src/icons";

import { Button } from "src/components/Button";
import {
  BaseFullScreen,
  BaseFullScreenExit,
  BaseMute,
  BasePause,
  BasePlay,
  BaseUnmute,
} from "src/components/controls2";
import { BaseSettings } from "src/components/controls2/settings";

import { SettingProvider } from "src/provider/SettingsProvider";
import { useVideo } from "src/provider/VideoProvider";

export const ControlsView: () => JSX.Element = () => {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7));
        visibility: visible;
        opacity: 1;
        font-size: 1rem;
      `}
    >
      <div
        className={css`
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <TogglePlayPause />
          <ToggleVolume />
        </div>
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <SettingProvider>
            <BaseSettings />
          </SettingProvider>
          <ToggleFullScreen />
        </div>
      </div>
    </div>
  );
};

const TogglePlayPause: () => JSX.Element = () => {
  const { play } = useVideo();
  const styles = css``;

  if (play) {
    return (
      <BasePause>
        <Button aria-label={"Pause"} title={"Pause"} className={styles}>
          <PauseIcon width="2rem" />
        </Button>
      </BasePause>
    );
  }

  return (
    <BasePlay>
      <Button aria-label={"Play"} title={"Play"} className={styles}>
        <PlayIcon width="2rem" />
      </Button>
    </BasePlay>
  );
};

const ToggleVolume: () => JSX.Element = () => {
  const { mute } = useVideo();

  if (mute) {
    return (
      <BaseMute>
        <Button aria-label={"Unmute"} title={"Unmute"}>
          <OffVolumeIcon width="2rem" />
        </Button>
      </BaseMute>
    );
  }

  return (
    <BaseUnmute>
      <Button aria-label={"Mute"} title={"Mute"}>
        <FullVolumeIcon width="2rem" />
      </Button>
    </BaseUnmute>
  );
};

const ToggleFullScreen: () => JSX.Element = () => {
  const { fullscreen } = useVideo();

  if (fullscreen) {
    return (
      <BaseFullScreenExit>
        <Button aria-label={"Exit full screen"} title={fullscreen ? "Exit full screen" : "Full screen"}>
          <FullScreenExitIcon width="2rem" />
        </Button>
      </BaseFullScreenExit>
    );
  }

  return (
    <BaseFullScreen>
      <Button aria-label={"Full screen"} title={"Full screen"}>
        <FullScreenIcon width="2rem" />
      </Button>
    </BaseFullScreen>
  );
};
