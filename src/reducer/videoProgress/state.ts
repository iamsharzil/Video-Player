export enum Status {
  VIDEO_PROGRESS = "VIDEO_PROGRESS",
  RESET_VIDEO_PROGRESS = "RESET_VIDEO_PROGRESS",
}

export type VideoState = {
  videoWatchedDuration: number | undefined;
  videoPendingDuration: number | undefined;
  totalDuration: number | undefined;
  videoWatchedPercentage: number | undefined;
};

export const initialState: VideoState = {
  videoWatchedDuration: 0,
  videoPendingDuration: undefined,
  totalDuration: undefined,
  videoWatchedPercentage: 0,
};
