import React from "react";

import { css, cx } from "@emotion/css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider, Theme } from "@mui/system";

import { Controls } from "./components/controls";
import { VideoPlayer } from "./provider/VideoProvider";
import { ControlsView } from "./view/controls";

export const theme: () => Theme = () => {
  const themes = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            // backgroundColor: "tomato",
          },

          // "video::-webkit-media-controls": {
          //   display: "none !important",
          // },

          // "video::-webkit-media-controls-enclosure": {
          //   display: "none !important",
          // },
        },
      },
      MuiSlider: {
        styleOverrides: {
          root: {
            color: "#7c32a1",
            height: 4,
          },
          thumb: {
            width: 24,
            height: 24,
            border: "2px solid",
            color: "#7c32a1",
            backgroundColor: "#fff",
            ":before": {
              boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
            },
            "&:hover, &.Mui-focusVisible, &.Mui-active": {
              boxShadow: "none",
            },
          },
          track: {},
          rail: {
            color: "rgba(255,255,255,0.87)",
            opacity: 1,
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "#fff",
          },
        },
      },
    },
    typography: {
      fontFamily: '"Maven Pro", sans-serif',
      fontSize: 16,
      // htmlFontSize: 10,
    },
  });
  return responsiveFontSizes(themes);
};

const App: () => JSX.Element = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <div
        className={css`
          background-color: #000;
          height: 400px;
          margin: 0 auto;
          position: relative;
          width: 900px;
        `}
      >
        <VideoPlayer
          url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
          controls={false}
          ref={videoRef}
          autoPlay={false}
          poster="https://www.zenius.net/assets/v-img/8/3a/a896/83aa89608331411bf4fbf6532dbd66cf15b503ff3b08178de18ae502c772b60e.jpg"

          // fluid={true}
        >
          {/* <Controls /> */}
          <ControlsView />
        </VideoPlayer>
      </div>
    </ThemeProvider>
  );
};

export default App;
