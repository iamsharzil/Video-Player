import React from "react";

import { settingsReducer, SettingActions, initialState, SettingState } from "src/reducer/settings";

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

const useDispatchSettings: () => React.Dispatch<SettingActions> = () => {
  const context = React.useContext(SettingDispatchContext);

  if (!context) {
    throw new Error("useDispatchSettings must be used inside SettingProvider");
  }

  return context;
};

export { SettingProvider, useSettings, useDispatchSettings };
