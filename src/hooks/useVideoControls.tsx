import screenfull from "screenfull";
import screenful from "screenfull";

import { useDispatchVideo, useVideo } from "src/provider/VideoProvider";

import { VideoStatus } from "src/reducer/video";

import useVideoEvents from "./useVideoEvents";

const useVideoControls: () => {
  toggleVideoPlay: () => void;
  toggleVideoMute: (mute: boolean) => void;
  updateDuration: (newVolume: number) => number;
  toggleFullScreen: (status: boolean) => void;
  toggleVideoControls: () => void;
} = () => {
  const { controls, video, play } = useVideo();
  const { handleOnPause, handleOnPlay } = useVideoEvents();
  const dispatch = useDispatchVideo();

  /**
   * @function toggleVideoPlay()
   * @description: The toggleVideoPlay function is called when the user wants to toggle play/pause
   */
  const toggleVideoPlay = () => {
    if (play) handleOnPause();
    else handleOnPlay();
  };

  /**
   * @function toggleVideoMute()
   * @description: The toggleVideoMute function is called when the user wants to toggle mute/unmute
   */
  const toggleVideoMute = (mute: boolean) => {
    if (video.muted === mute) return;
    dispatch({ type: VideoStatus.TOGGLE_MUTE, payload: { mute } });
    // video.muted = mute;
  };

  /**
   * @function handlePlayBackspeed()
   * @description: The handlePlayBackspeed function is called when the user wants to change the playback speed
   */
  const handlePlayBackspeed = (speed: number) => {
    video.playbackRate = speed;
  };

  /**
   * @function updateDuration()
   * @description: The updateDuration function is called when the video current time is modified
   */
  const updateDuration = (newVolume: number) => (video.currentTime = newVolume);

  /**
   * @function toggleFullScreen()
   * @description: The toggleFullScreen function will toggle full screen for the parent node which includes both, video and controls
   */
  const toggleFullScreen = (status: boolean) => {
    // dispatch({
    //   type: VideoStatus.TOGGLE_FULLSCREEN,
    //   payload: {
    //     fullScreen: status,
    //   },
    // });

    if (!status) {
      dispatch({
        type: VideoStatus.TOGGLE_CONTROLS,
        payload: {
          controls: true,
        },
      });
    }
    (screenful as screenfull.Screenfull).toggle(video.parentElement);
  };

  /**
   * @function toggleVideoControls()
   * @description: The toggleVideoControls function will toggle video controls based on user's inactivity in full screen mode
   */
  const toggleVideoControls = function () {
    // let userActivity = true;
    let inactivityTimeout: NodeJS.Timer;

    // const activityCheck = setInterval(function () {
    //   // Check to see if the mouse has been moved

    //   if (userActivity) {
    //     // Reset the activity tracker
    //     userActivity = false;

    //     // If the user state was passive, set the state to active
    //     if (!controls) {
    //       dispatch({
    //         type: Status.TOGGLE_CONTROLS,
    //         payload: {
    //           controls: true,
    //         },
    //       });
    //     }

    //     // Clear any existing inactivity timeout to start the timer over
    //     clearTimeout(inactivityTimeout);

    //     // In X seconds, if no more activity has occurred (resetting this timer) the user will be considered passive
    //     inactivityTimeout = setTimeout(function () {
    //       // Protect against the case where the inactivity timeout can trigger
    //       // before the next user activity is picked up by the activityCheck loop.
    //       if (!userActivity) {
    //         dispatch({
    //           type: Status.TOGGLE_CONTROLS,
    //           payload: {
    //             controls: false,
    //           },
    //         });
    //       }
    //     }, 5000);
    //   }
    // }, 250);

    // if (fullScreen) {
    //   const INACTIVE_CONTROLS_DURATION = 5000;
    //   let inactivityTimeout: NodeJS.Timeout = undefined;
    //   clearTimeout(inactivityTimeout);
    //   dispatch({
    //     type: Status.TOGGLE_CONTROLS,
    //     payload: {
    //       controls: true,
    //     },
    //   });
    //   /**
    //    * HIDE CONTROLS AFTER 3 SECONDS OF INVACTIVITY
    //    */
    //   inactivityTimeout = setTimeout(function () {
    //     dispatch({
    //       type: Status.TOGGLE_CONTROLS,
    //       payload: {
    //         controls: false,
    //       },
    //     });
    //   }, INACTIVE_CONTROLS_DURATION);
    // }
  };

  return { toggleVideoPlay, toggleVideoMute, toggleFullScreen, toggleVideoControls, updateDuration };
};

export default useVideoControls;
