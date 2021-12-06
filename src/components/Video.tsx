import React from "react";

import { css, cx } from "@emotion/css";
import Hls from "hls.js";

import { useVideo } from "src/provider/VideoProvider";

import { VideoPropsState } from "src/reducer/video";

import useVideoEvents from "src/hooks/useVideoEvents";

type Props = VideoPropsState;

type Ref = HTMLVideoElement;

export const Video = React.forwardRef<Ref, Props>((props, videoRef) => {
  const { autoPlay, controls, url } = useVideo();
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
      const hls = new Hls();
      hls.attachMedia((videoRef as React.MutableRefObject<HTMLVideoElement>).current);

      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource(url);
        // "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
        // "https://vs4zenius.akamaized.net/m3u8/4/64/4f0f/4644f0fa61c7d5ce3f081726ac263e60db6c58a40ab41934af4a6fbb49983bf1.m3u8?hdnts=st=1638180567~exp=1638182367~acl=/m3u8/4/64/4f0f*~hmac=01572b37913f505fc92e4a8e79089f0df3183310e76949f81b95195b8495f1c0"

        // hls.on(Hls.Events.MANIFEST_PARSED, function (_event, data) {
        //   console.log("manifest loaded, found " + data.levels.length + " quality level");
        //   console.log(data);
        // });
      });
    }
  }, [url, videoRef]);

  const styles = css`
    width: ${fluid ? "100%" : "inherit"};
    height: ${fluid ? "100%" : "inherit"};
  `;

  return (
    <video
      preload="auto"
      width={900}
      height={400}
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
