import React from "react";

import useVideoControls from "src/hooks/useVideoControls";
import useVideoEvents from "src/hooks/useVideoEvents";

type Props = { children: React.ReactNode };

const callAll =
  (...fns: any[]) =>
  (...args: any[]) =>
    fns.forEach((fn) => fn && fn(...args));

const Play: React.FC<Props> = ({ children }) => {
  const { handleOnPlay } = useVideoEvents();
  return (
    <React.Fragment>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: callAll(handleOnPlay, child.props.onClick) });
        }

        // @TODO
        // WHETHER TO ADD SUPPORT OF ONCLICK FOR NON REACT ELEMENTS

        return child; // string | boolean | number
      })}
    </React.Fragment>
  );
};

const Pause: React.FC<Props> = ({ children }) => {
  const { handleOnPause } = useVideoEvents();
  return (
    <React.Fragment>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: callAll(handleOnPause, child.props.onClick) });
        }
        return child;
      })}
    </React.Fragment>
  );
};

const Unmute: React.FC<Props> = ({ children }) => {
  const { toggleVideoMute } = useVideoControls();

  return (
    <React.Fragment>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: callAll(() => toggleVideoMute(true), child.props.onClick) });
        }
        return child;
      })}
    </React.Fragment>
  );
};

const Mute: React.FC<Props> = ({ children }) => {
  const { toggleVideoMute } = useVideoControls();

  return (
    <React.Fragment>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: callAll(() => toggleVideoMute(false), child.props.onClick) });
        }
        return child;
      })}
    </React.Fragment>
  );
};

const FullScreen: React.FC<Props> = ({ children }) => {
  const { toggleFullScreen } = useVideoControls();

  return (
    <React.Fragment>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: callAll(() => toggleFullScreen(true), child.props.onClick) });
        }
        return child;
      })}
    </React.Fragment>
  );
};

const FullScreenExit: React.FC<Props> = ({ children }) => {
  const { toggleFullScreen } = useVideoControls();

  return (
    <React.Fragment>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: callAll(() => toggleFullScreen(false), child.props.onClick) });
        }
        return child;
      })}
    </React.Fragment>
  );
};

const Settings: React.FC<Props> = ({ children }) => {
  const { toggleFullScreen } = useVideoControls();

  return (
    <React.Fragment>
      {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: callAll(() => toggleFullScreen(false), child.props.onClick) });
        }
        return child;
      })}
    </React.Fragment>
  );
};

export {
  FullScreen as BaseFullScreen,
  FullScreenExit as BaseFullScreenExit,
  Mute as BaseMute,
  Play as BasePlay,
  Pause as BasePause,
  Settings as BaseSettings,
  Unmute as BaseUnmute,
};
