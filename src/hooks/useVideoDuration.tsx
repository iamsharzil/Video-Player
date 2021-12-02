import React from "react";

import { useVideo } from "src/provider/VideoProvider";

import { useInterval } from "./useInteval";

const useVideoDuration: () => { playedDuration: number; totalDuration: number; percent: number } = () => {
  const { video, play } = useVideo();

  const [playedDuration, setPlayeDuration] = React.useState(0);
  const totalDuration = +video?.duration;
  const percent = totalDuration && +((playedDuration / totalDuration) * 100).toFixed(2);

  useInterval(
    () => {
      if (video?.currentTime) {
        setPlayeDuration(video?.currentTime);
      }
    },
    // Delay in milliseconds or null to stop it
    play ? 1000 : null
  );

  return { playedDuration, totalDuration, percent };
};

export default useVideoDuration;
