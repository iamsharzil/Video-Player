import React from "react";

import { css } from "@emotion/css";
import Hls from "hls.js";

import { useVideo } from "src/provider/VideoProvider";

import { VideoPropsState } from "src/reducer/video";

import useVideoEvents from "src/hooks/useVideoEvents";

type Props = VideoPropsState;

type Ref = HTMLVideoElement;

export const Video = React.forwardRef<Ref, Props>((props, videoRef) => {
  const { hls, autoPlay, controls, url, selectedQuality } = useVideo();
  const { fluid } = props;
  const {
    handleDurationChange,
    handleOnEnd,
    handleOnError,
    handleOnLoadedData,
    handleOnPlay,
    handleOnPause,
    handleOnSeeked,
    handleOnSeeking,
    handleOnWaiting,
  } = useVideoEvents();

  React.useEffect(() => {
    if (Hls.isSupported()) {
      hls.attachMedia((videoRef as React.MutableRefObject<HTMLVideoElement>).current);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource(url);
      });
    }
  }, [hls, url, videoRef]);

  React.useEffect(() => {
    if (Hls.isSupported()) {
      hls.on(Hls.Events.ERROR, function (_event, data) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              // try to recover network error
              console.log("fatal network error encountered, try to recover");
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log("fatal media error encountered, try to recover");
              hls.recoverMediaError();
              break;
            default:
              // cannot recover
              hls.destroy();
              break;
          }
        }
      });
    }
  }, [hls]);

  const styles = css`
    width: ${fluid ? "100%" : "inherit"};
    height: ${fluid ? "100%" : "inherit"};
  `;

  return (
    <video
      preload="auto"
      ref={videoRef}
      autoPlay={autoPlay}
      controls={controls}
      onTimeUpdate={handleDurationChange}
      onLoadedData={handleOnLoadedData}
      onEnded={handleOnEnd}
      onPlay={handleOnPlay}
      onPause={handleOnPause}
      onError={handleOnError}
      onWaiting={handleOnWaiting}
      onSeeking={handleOnSeeking}
      onSeeked={handleOnSeeked}
      onPlaying={() => console.log("on playing")}
      className={styles}
      {...props}
    />
  );
});
