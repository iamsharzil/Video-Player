import { Status } from "./state";

interface VideoProgress {
  type: Status.VIDEO_PROGRESS;
  payload: {
    videoWatchedDuration: number;
    videoPendingDuration: number;
    videoWatchedPercentage: number;
  };
}

interface ResetVideoProgress {
  type: Status.RESET_VIDEO_PROGRESS;
}

export type VideoActions = VideoProgress | ResetVideoProgress;
