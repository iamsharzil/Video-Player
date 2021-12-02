enum VideoProgressStatus {
  RESET_VIDEO_PROGRESS = "RESET_VIDEO_PROGRESS",
  TOTAL_DURATION = "TOTAL_DURATION",
  VIDEO_PROGRESS = "VIDEO_PROGRESS",
}

export type VideoState = {
  videoWatchedDuration: number | undefined;
  videoPendingDuration: number | undefined;
  totalDuration: number | undefined;
  videoWatchedPercentage: number | undefined;
};

const initialState: VideoState = {
  videoWatchedDuration: 0,
  videoPendingDuration: undefined,
  totalDuration: undefined,
  videoWatchedPercentage: 0,
};

interface TotalDuration {
  type: VideoProgressStatus.TOTAL_DURATION;
  payload: {
    totalDuration: number;
  };
}

interface VideoProgress {
  type: VideoProgressStatus.VIDEO_PROGRESS;
  payload: {
    videoWatchedDuration: number;
    videoPendingDuration: number;
    videoWatchedPercentage: number;
  };
}

interface ResetVideoProgress {
  type: VideoProgressStatus.RESET_VIDEO_PROGRESS;
}

export type VideoActions = ResetVideoProgress | TotalDuration | VideoProgress;

function videoProgressReducer(state: VideoState, action: VideoActions): VideoState {
  switch (action.type) {
    case VideoProgressStatus.TOTAL_DURATION:
      return {
        ...state,
        totalDuration: action.payload.totalDuration,
      };

    case VideoProgressStatus.VIDEO_PROGRESS:
      return {
        ...state,
        videoWatchedDuration: action.payload.videoWatchedDuration,
        videoPendingDuration: action.payload.videoPendingDuration,
        videoWatchedPercentage: action.payload.videoWatchedPercentage,
      };

    case VideoProgressStatus.RESET_VIDEO_PROGRESS:
      return {
        ...state,
        videoWatchedDuration: 0,
        videoPendingDuration: state.totalDuration,
        videoWatchedPercentage: 0,
      };
  }
}

export { VideoProgressStatus, videoProgressReducer, initialState };
