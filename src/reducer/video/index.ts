// ENUM
enum VideoStatus {
  INIT = "INIT",
  LOADING = "LOADING",
  TOGGLE_CONTROLS = "TOGGLE_CONTROLS",
  TOGGLE_FULLSCREEN = "TOGGLE_FULLSCREEN",
  TOGGLE_LOADING = "TOGGLE_LOADING",
  TOGGLE_MUTE = "TOGGLE_MUTE",
  TOGGLE_PLAY = "TOGGLE_PLAY",
}

// STATE
export type VideoPropsState = {
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  url?: string | undefined;
  fluid?: boolean;
  poster?: string;
};

export type VideoState = VideoPropsState & {
  controls: boolean;
  fullscreen: boolean;
  loading: boolean;
  play: boolean;
  mute: boolean;
  video: HTMLVideoElement | null;
};

// INTERFACE
interface InitVideo {
  type: VideoStatus.INIT;
  payload: { video: HTMLVideoElement; loading: boolean };
}

interface ToggleControls {
  type: VideoStatus.TOGGLE_CONTROLS;
  payload: { controls: boolean };
}

interface ToggleLoading {
  type: VideoStatus.TOGGLE_LOADING;
  payload: { loading: boolean };
}

interface ToggleMute {
  type: VideoStatus.TOGGLE_MUTE;
  payload: { mute: boolean };
}

interface TogglePlay {
  type: VideoStatus.TOGGLE_PLAY;
  payload: { play: boolean };
}

interface ToggleFullScreen {
  type: VideoStatus.TOGGLE_FULLSCREEN;
  payload: { fullscreen: boolean };
}

export type VideoActions = InitVideo | ToggleControls | ToggleFullScreen | ToggleLoading | ToggleMute | TogglePlay;

// INITIAL STATE
const initialPropState: VideoPropsState = {
  autoPlay: true,
  controls: true,
  fluid: true,
  muted: false,
  poster: undefined,
  url: undefined,
};

const initialState: VideoState = {
  controls: true,
  fullscreen: false,
  loading: true,
  play: true,
  mute: false,
  video: null,
  ...initialPropState,
};

// REDUCER
function videoReducer(state: VideoState, action: VideoActions): VideoState {
  switch (action.type) {
    case VideoStatus.INIT:
      return {
        ...state,
        video: action.payload.video,
        loading: action.payload.loading,
      };

    case VideoStatus.TOGGLE_CONTROLS:
      return { ...state, controls: action.payload.controls };

    case VideoStatus.TOGGLE_FULLSCREEN:
      return { ...state, fullscreen: action.payload.fullscreen };

    case VideoStatus.TOGGLE_LOADING:
      return { ...state, loading: action.payload.loading };

    case VideoStatus.TOGGLE_MUTE:
      state.video.muted = action.payload.mute;
      return { ...state, mute: action.payload.mute };

    case VideoStatus.TOGGLE_PLAY:
      if (action.payload.play) state.video.play();
      else state.video.pause();
      return { ...state, play: action.payload.play };
  }
}

export { VideoStatus, initialState, initialPropState, videoReducer };
