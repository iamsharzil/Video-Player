import React from "react";

import { videoProgressReducer, VideoActions, initialState, VideoState } from "src/reducer/videoProgress";

const VideoProgressDispatchContext = React.createContext<React.Dispatch<VideoActions>>(() => undefined);
VideoProgressDispatchContext.displayName = "VideoProgressDispatchContext";

const VideoProgressStateContext = React.createContext(initialState);
VideoProgressStateContext.displayName = "VideoProgressStateContext";

const VideoProgressProvider: ({ children }: { children: React.ReactChild }) => JSX.Element = ({ children }) => {
  const [state, dispatch] = React.useReducer(videoProgressReducer, initialState);

  return (
    <VideoProgressDispatchContext.Provider value={dispatch}>
      <VideoProgressStateContext.Provider value={state}>{children}</VideoProgressStateContext.Provider>
    </VideoProgressDispatchContext.Provider>
  );
};

const useVideoProgress: () => VideoState = () => {
  const context = React.useContext(VideoProgressStateContext);

  if (!context) {
    throw new Error("useVideo must be used inside VideoProvider");
  }

  return context;
};

const useDispatchVideoProgress: () => React.Dispatch<VideoActions> = () => {
  const context = React.useContext(VideoProgressDispatchContext);

  if (!context) {
    throw new Error("useDispatchVideo must be used inside VideoProvider");
  }

  return context;
};

export { VideoProgressProvider, useVideoProgress, useDispatchVideoProgress };
