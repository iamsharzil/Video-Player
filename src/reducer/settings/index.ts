// ENUM
enum SettingStatus {
  TOGGLE_SETTINGS = "TOGGLE_SETTINGS",
  TOGGLE_PLAYBACK = "TOGGLE_PLAYBACK",
  TOGGLE_VIDEO_QUALITY = "TOGGLE_VIDEO_QUALITY",
}

export type SettingState = {
  open?: boolean;
  playback?: boolean;
  videoQuality?: boolean;
};

// INTERFACE
interface ToggleSettings {
  type: SettingStatus.TOGGLE_SETTINGS;
  payload: { open: boolean; videoQuality: boolean; playback: boolean };
}

interface TogglePlayback {
  type: SettingStatus.TOGGLE_PLAYBACK;
  payload: { open: boolean; videoQuality: boolean; playback: boolean };
}

interface ToggleVideoQuality {
  type: SettingStatus.TOGGLE_VIDEO_QUALITY;
  payload: { open: boolean; videoQuality: boolean; playback: boolean };
}

export type SettingActions = ToggleSettings | TogglePlayback | ToggleVideoQuality;

const initialState: SettingState = {
  open: false,
  playback: false,
  videoQuality: false,
};

// REDUCER
function settingsReducer(state: SettingState, action: SettingActions): SettingState {
  switch (action.type) {
    case SettingStatus.TOGGLE_SETTINGS:
      return {
        ...state,
        open: action.payload.open,
        playback: action.payload.playback,
        videoQuality: action.payload.videoQuality,
      };

    case SettingStatus.TOGGLE_PLAYBACK:
      return {
        ...state,
        open: action.payload.open,
        playback: action.payload.playback,
        videoQuality: action.payload.videoQuality,
      };

    case SettingStatus.TOGGLE_VIDEO_QUALITY:
      return {
        ...state,
        open: action.payload.open,
        playback: action.payload.playback,
        videoQuality: action.payload.videoQuality,
      };
  }
}

export { SettingStatus, initialState, settingsReducer };
