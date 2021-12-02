import React from "react";

import { useDispatchVideoProgress } from "src/provider/VideoProgressProvider";
import { useDispatchVideo, useVideo } from "src/provider/VideoProvider";

import { VideoStatus } from "src/reducer/video";
import { VideoProgressStatus } from "src/reducer/videoProgress";

const useVideoEvents: () => {
  handleDurationChange: (event?: React.SyntheticEvent<HTMLVideoElement>) => void;
  handleOnError: (event?: React.SyntheticEvent<HTMLVideoElement>) => void;
  handleOnEnd: (event?: React.SyntheticEvent<HTMLVideoElement>) => void;
  handleOnLoadedData: (event?: React.SyntheticEvent<HTMLVideoElement>) => void;
  handleLoadedMetaData: (event?: React.SyntheticEvent<HTMLVideoElement>) => void;
  handleOnPlay: (event?: React.SyntheticEvent<HTMLVideoElement>) => void;
  handleOnPause: (event?: React.SyntheticEvent<HTMLVideoElement>) => void;
  handleOnSeeking: (event?: React.SyntheticEvent<HTMLVideoElement>) => void;
  handleOnSeeked: (event?: React.SyntheticEvent<HTMLVideoElement>) => void;
  handleOnWaiting: (event?: React.SyntheticEvent<HTMLVideoElement>) => void;
} = () => {
  const { video } = useVideo();
  const dispatch = useDispatchVideo();
  const dispatchProgress = useDispatchVideoProgress();
  // const status = useScript("//cdn.jsdelivr.net/npm/hls.js@latest");

  /**
   * @function handleDurationChange(event)
   * @param event?: React.SyntheticEvent<HTMLVideoElement>
   * @description: The handleDurationChange function is called when the video is playing.
   */

  const handleDurationChange = (event?: React.SyntheticEvent<HTMLVideoElement>) => {
    console.log("handleDurationChange");
    const currentVideo = event.currentTarget;
    const videoWatchedDuration = currentVideo.currentTime;
    const videoPendingDuration = currentVideo.duration - currentVideo.currentTime;
    const videoWatchedPercentage = +((videoWatchedDuration / currentVideo.duration) * 100).toFixed(2);

    dispatchProgress({
      type: VideoProgressStatus.VIDEO_PROGRESS,
      payload: {
        videoWatchedDuration,
        videoPendingDuration,
        videoWatchedPercentage,
      },
    });
  };

  /**
   * @function handleOnEnd(event)
   * @param event?: React.SyntheticEvent<HTMLVideoElement>
   * @description: The handleOnEnd function is called when the video is watched completely.
   */

  const handleOnEnd = (_event?: React.SyntheticEvent<HTMLVideoElement>) => {
    console.log("END");
    // dispatch({
    //   type: VideoStatus.RESET_VIDEO_PROGRESS,
    // });
  };

  /**
   * @function handleOnError(event)
   * @param event?: React.SyntheticEvent<HTMLVideoElement>
   * @description: The handleOnError function is called when the error occurs.
   */

  const handleOnError = (event?: React.SyntheticEvent<HTMLVideoElement>) => {
    console.log("handleOnError", event.nativeEvent);
  };

  /**
   * @function handleOnLoadedData(event)
   * @param event?: React.SyntheticEvent<HTMLVideoElement>
   * @description: The handleOnLoadedData function is called when the metadata has been loaded.
   */

  const handleOnLoadedData = (event?: React.SyntheticEvent<HTMLVideoElement>) => {
    const currentVideo = event.currentTarget;
    console.log("handleOnLoadedData");
    dispatch({
      type: VideoStatus.INIT,
      payload: {
        video: currentVideo,
        loading: false,
      },
    });

    dispatchProgress({
      type: VideoProgressStatus.TOTAL_DURATION,
      payload: {
        totalDuration: currentVideo.duration,
      },
    });

    if (!currentVideo.autoplay) {
      dispatch({
        type: VideoStatus.TOGGLE_PLAY,
        payload: {
          play: false,
        },
      });
    }
  };

  /**
   * @function handleLoadedMetaData(event)
   * @param event?: React.SyntheticEvent<HTMLVideoElement>
   * @description: The handleLoadedMetaData function is called when the metadata has been loaded.
   */

  const handleLoadedMetaData = (event?: React.SyntheticEvent<HTMLVideoElement>) => {
    console.log("handleLoadedMetaData");
    const currentVideo = event.currentTarget;

    dispatch({
      type: VideoStatus.INIT,
      payload: {
        video: currentVideo,
        loading: false,
      },
    });

    // if (!currentVideo.autoplay) {
    //   dispatch({
    //     type: VideoStatus.TOGGLE_PLAY,
    //     payload: {
    //       play: false,
    //     },
    //   });
    // }
  };

  /**
   * @function handleOnPlay(event)
   * @param event?: React.SyntheticEvent<HTMLVideoElement>
   * @description: The handleOnPlay function is called when the user wants the video to be played.
   */

  const handleOnPlay = (_event?: React.SyntheticEvent<HTMLVideoElement>) => {
    console.log("handleOnPlay");
    if (!video.paused) return;
    dispatch({
      type: VideoStatus.TOGGLE_PLAY,
      payload: {
        play: true,
      },
    });

    // video.play();
  };

  /**
   * @function handleOnPause(event)
   * @param event?: React.SyntheticEvent<HTMLVideoElement>
   * @description: The handhandleOnPause function is called when the user wants the video to be paused.
   * If the autoPlay is set to false, dispatch PAUSE action
   */

  const handleOnPause = (_event?: React.SyntheticEvent<HTMLVideoElement>) => {
    if (video.paused) return;

    dispatch({
      type: VideoStatus.TOGGLE_PLAY,
      payload: {
        play: false,
      },
    });

    // video.pause();
  };

  const handleOnSeeking = (event?: React.SyntheticEvent<HTMLVideoElement>) => {
    console.log("handleOnSeeking", event);

    dispatch({
      type: VideoStatus.TOGGLE_LOADING,
      payload: {
        loading: true,
      },
    });

    video.pause();
  };

  const handleOnSeeked = (event?: React.SyntheticEvent<HTMLVideoElement>) => {
    console.log("handleOnSeeked", event);

    dispatch({
      type: VideoStatus.TOGGLE_LOADING,
      payload: {
        loading: false,
      },
    });

    video.play();
  };

  const handleOnWaiting = (event?: React.SyntheticEvent<HTMLVideoElement>) => {
    console.log("handleOnWaiting", event);

    // dispatch({
    //   type: VideoStatus.TOGGLE_LOADING,
    //   payload: {
    //     loading: true,
    //   },
    // });
  };

  return {
    handleDurationChange,
    handleOnEnd,
    handleOnError,
    handleOnLoadedData,
    handleLoadedMetaData,
    handleOnPlay,
    handleOnPause,
    handleOnSeeked,
    handleOnSeeking,
    handleOnWaiting,
  };
};

export default useVideoEvents;
