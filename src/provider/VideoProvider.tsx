import React from "react";

import { Video } from "src/components/Video";

import { videoReducer, VideoActions, initialState, VideoState, VideoPropsState } from "src/reducer/video";

import { VideoProgressProvider } from "./VideoProgressProvider";

const VideoDispatchContext = React.createContext<React.Dispatch<VideoActions>>(() => undefined);
VideoDispatchContext.displayName = "VideoDispatchContext";

const VideoStateContext = React.createContext(initialState);
VideoStateContext.displayName = "VideoStateContext";

type Props = VideoPropsState & {
  children: React.ReactChild;
};

type Ref = HTMLVideoElement;

const VideoProvider: React.FC<Props> = ({ children, ...defaultState }) => {
  const initalStateRef = React.useRef({
    ...initialState,
    ...defaultState,
  });

  const [state, dispatch] = React.useReducer(videoReducer, initalStateRef.current);

  return (
    <VideoDispatchContext.Provider value={dispatch}>
      <VideoStateContext.Provider value={state}>{children}</VideoStateContext.Provider>
    </VideoDispatchContext.Provider>
  );
};

const useVideo: () => VideoState = () => {
  const context = React.useContext(VideoStateContext);

  if (!context) {
    throw new Error("useVideo must be used inside VideoProvider");
  }

  return context;
};

const useDispatchVideo: () => React.Dispatch<VideoActions> = () => {
  const context = React.useContext(VideoDispatchContext);

  if (!context) {
    throw new Error("useDispatchVideo must be used inside VideoProvider");
  }

  return context;
};

const VideoPlayer = React.forwardRef<Ref, Props>(({ children, ...props }, videoRef) => {
  return (
    <VideoProvider {...props}>
      <VideoProgressProvider>
        {props.controls ? (
          <Video {...props} ref={videoRef} />
        ) : (
          <>
            <Video {...props} ref={videoRef} />
            {children}
          </>
        )}
      </VideoProgressProvider>
    </VideoProvider>
  );
});

export { VideoPlayer, useVideo, useDispatchVideo };
