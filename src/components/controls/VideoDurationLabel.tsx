import { Stack, Typography } from "@mui/material";
import { DURATION_PLACEHOLDER } from "src/constants";
import { formatTime } from "src/utils";

import { useVideoProgress } from "src/provider/VideoProgressProvider";

export const VideoDurationLabel: () => JSX.Element = () => {
  const { videoWatchedDuration, totalDuration } = useVideoProgress();

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      sx={{
        color: "#fff",
      }}
    >
      <Typography component="time" variant={"body2"}>
        {Number.isNaN(videoWatchedDuration) ? DURATION_PLACEHOLDER : formatTime(videoWatchedDuration)}
      </Typography>
      <Typography component="span">/</Typography>
      <Typography component="time" variant={"body2"}>
        {Number.isNaN(totalDuration) ? DURATION_PLACEHOLDER : formatTime(totalDuration)}
      </Typography>
    </Stack>
  );
};
