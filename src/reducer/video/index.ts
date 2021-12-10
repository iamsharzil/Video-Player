import Hls from "hls.js";
// ENUM
enum VideoStatus {
  INIT = "INIT",
  LOADING = "LOADING",
  TOGGLE_CONTROLS = "TOGGLE_CONTROLS",
  TOGGLE_FULLSCREEN = "TOGGLE_FULLSCREEN",
  TOGGLE_LOADING = "TOGGLE_LOADING",
  TOGGLE_MUTE = "TOGGLE_MUTE",
  TOGGLE_PLAY = "TOGGLE_PLAY",
  VIDEO_QUALITY = "VIDEO_QUALITY",
  CHANGE_VIDEO_QUALITY = "CHANGE_VIDEO_QUALITY",
}

// STATE
export type VideoPropsState = {
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  url?: string | undefined;
  fluid?: boolean;
  poster?: string;
  hls: Hls | undefined;
};

export type VideoState = VideoPropsState & {
  controls: boolean;
  fullscreen: boolean;
  loading: boolean;
  play: boolean;
  mute: boolean;
  video: HTMLVideoElement | null;
  videoQuality: Array<{
    value: string | number;
    label: string | number;
  }>;
  selectedQuality: number;
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

interface VideoQuality {
  type: VideoStatus.VIDEO_QUALITY;
  payload: {
    videoQuality: Array<{
      value: string | number;
      label: string | number;
    }>;
  };
}
interface ChangeVideoQuality {
  type: VideoStatus.CHANGE_VIDEO_QUALITY;
  payload: { selectedQuality: number };
}

export type VideoActions =
  | ChangeVideoQuality
  | InitVideo
  | ToggleControls
  | ToggleFullScreen
  | ToggleLoading
  | ToggleMute
  | TogglePlay
  | VideoQuality;

// INITIAL STATE
const initialPropState: VideoPropsState = {
  autoPlay: true,
  controls: true,
  fluid: true,
  muted: false,
  poster: undefined,
  url: undefined,
  hls: undefined,
};

const initialState: VideoState = {
  controls: true,
  fullscreen: false,
  loading: true,
  play: true,
  mute: false,
  video: null,
  videoQuality: [], // [{ value: "-1", label: "Auto", selected: true }],
  selectedQuality: -1,
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

    case VideoStatus.VIDEO_QUALITY:
      return {
        ...state,
        videoQuality: action.payload.videoQuality,
      };

    case VideoStatus.CHANGE_VIDEO_QUALITY:
      return {
        ...state,
        selectedQuality: action.payload.selectedQuality,
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
