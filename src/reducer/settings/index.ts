// ENUM
enum SettingStatus {
  TOGGLE_SETTINGS = "TOGGLE_SETTINGS",
  TOGGLE_PLAYBACK = "TOGGLE_PLAYBACK",
  TOGGLE_VIDEO_QUALITY = "TOGGLE_VIDEO_QUALITY",
}

export type SettingState = {
  open?: boolean;
  activeSetting: "playback" | "videoQuality" | "none";
};

// INTERFACE
interface ToggleSettings {
  type: SettingStatus.TOGGLE_SETTINGS;
  payload: { open: boolean; activeSetting: "playback" | "videoQuality" | "none" };
}

export type SettingActions = ToggleSettings;

const initialState: SettingState = {
  activeSetting: "none",
  open: false,
};

// REDUCER
function settingsReducer(state: SettingState, action: SettingActions): SettingState {
  switch (action.type) {
    case SettingStatus.TOGGLE_SETTINGS:
      return {
        ...state,
        activeSetting: action.payload.activeSetting,
        open: action.payload.open,
      };
  }
}

export { SettingStatus, initialState, settingsReducer };
