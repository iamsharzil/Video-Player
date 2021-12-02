import React from "react";

export const useInterval: (callback: () => void, delay: number | null) => void = (callback, delay) => {
  const savedCallback = React.useRef(callback);

  // Remember the latest callback if it changes.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return null;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
};
