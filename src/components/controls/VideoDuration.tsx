import React from "react";

import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import { formatTime } from "src/utils";

import { useVideoProgress } from "src/provider/VideoProgressProvider";

import useVideoControls from "src/hooks/useVideoControls";

export const VideoDuration: React.FC = React.memo(() => {
  const { totalDuration, videoWatchedPercentage } = useVideoProgress();
  const { updateDuration } = useVideoControls();

  const initialSliderValueRef = React.useRef<number>(videoWatchedPercentage);
  const [sliderValue, setSliderValue] = React.useState<number>();
  const initialSliderValue = initialSliderValueRef.current;

  React.useEffect(() => {
    setSliderValue(videoWatchedPercentage);
  }, [videoWatchedPercentage]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    const newDuration = (newValue as number) * 0.01 * totalDuration;
    updateDuration(newDuration);
    initialSliderValueRef.current = newValue as number;
  };

  const handleValueLabel: string | ((value: number, index: number) => React.ReactNode) = (newValue) => {
    const newDuration = newValue * 0.01 * totalDuration;
    return formatTime(newDuration);
  };

  return (
    <Box px={2}>
      <Slider
        aria-label="Video Slider"
        value={sliderValue > initialSliderValue ? sliderValue : initialSliderValue}
        onChange={handleChange}
        color="secondary"
        valueLabelDisplay="auto"
        valueLabelFormat={handleValueLabel}
      />
    </Box>
  );
});
