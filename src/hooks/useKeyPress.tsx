import React from "react";

import { useVideo } from "src/provider/VideoProvider";

export const useKeyPress: (targetKeyCode: number) => void = (targetKeyCode: number) => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = React.useState(false);

  const { video } = useVideo();

  // If pressed key is our target key then set to true
  // Add event listeners
  React.useEffect(() => {
    // const downHandler = ({ keyCode }: { keyCode: number }) => {
    //   if (keyCode === targetKeyCode) {
    //     setKeyPressed(true);
    //   }
    // };
    // If released key is our target key then set to false
    const upHandler = ({ keyCode }: { keyCode: number }) => {
      if (keyCode === targetKeyCode) {
        setKeyPressed(false);

        if (video.paused) video.play();
        else video.pause();
      }
    };

    // window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    // Remove event listeners on cleanup
    return () => {
      //   window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKeyCode, video]); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
};
