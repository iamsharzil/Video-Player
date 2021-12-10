import React from "react";

import { settingsReducer, SettingActions, initialState, SettingState, SettingStatus } from "src/reducer/settings";

const SettingDispatchContext = React.createContext<React.Dispatch<SettingActions>>(() => undefined);
SettingDispatchContext.displayName = "SettingDispatchContext";

const SettingContext = React.createContext(initialState);
SettingContext.displayName = "SettingContext";

const SettingProvider: ({ children }: { children: React.ReactChild }) => JSX.Element = ({ children }) => {
  const [state, dispatch] = React.useReducer(settingsReducer, initialState);

  return (
    <SettingDispatchContext.Provider value={dispatch}>
      <SettingContext.Provider value={state}>{children}</SettingContext.Provider>
    </SettingDispatchContext.Provider>
  );
};

const useSettings: () => SettingState = () => {
  const context = React.useContext(SettingContext);

  if (!context) {
    throw new Error("useSettings must be used inside SettingProvider");
  }

  return context;
};

const useDispatchSettings: () => {
  context: React.Dispatch<SettingActions>;
  handleSettingsClick: (open: boolean, activeSetting: "playback" | "videoQuality" | "none") => void;
} = () => {
  const context = React.useContext(SettingDispatchContext);

  if (!context) {
    throw new Error("useDispatchSettings must be used inside SettingProvider");
  }

  const handleSettingsClick = (open: boolean, activeSetting: "playback" | "videoQuality" | "none") => {
    context({
      type: SettingStatus.TOGGLE_SETTINGS,
      payload: {
        open,
        activeSetting,
      },
    });
  };

  return { context, handleSettingsClick };
};

export { SettingProvider, useSettings, useDispatchSettings };
