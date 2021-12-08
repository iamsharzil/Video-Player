import { css } from "@emotion/css";

import {
  BaseFullScreen,
  BaseFullScreenExit,
  BaseMute,
  BasePause,
  BasePlay,
  BaseSettings,
  BaseUnmute,
} from "src/components/controls2";

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "100%", height = "100%", ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#fff"
    className={css`
      width: ${width};
      height: ${height};
    `}
    {...props}
  >
    <path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path>
  </svg>
);

const PauseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "100%", height = "100%", ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#fff"
    className={css`
      width: ${width};
      height: ${height};
    `}
    {...props}
  >
    <path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path>
  </svg>
);

const OffVolumeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "100%", height = "100%", ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#fff"
    className={css`
      width: ${width};
      height: ${height};
    `}
    {...props}
  >
    <path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path>
  </svg>
);

const FullVolumeIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "100%", height = "100%", ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#fff"
    className={css`
      width: ${width};
      height: ${height};
    `}
    {...props}
  >
    <path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
  </svg>
);

const FullScreenIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "100%", height = "100%", ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#fff"
    className={css`
      width: ${width};
      height: ${height};
    `}
    {...props}
  >
    <path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
  </svg>
);

const FullScreenExitIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "100%", height = "100%", ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#fff"
    className={css`
      width: ${width};
      height: ${height};
    `}
    {...props}
  >
    <path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path>
  </svg>
);

const SettingsIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "100%", height = "100%", ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#fff"
    className={css`
      width: ${width};
      height: ${height};
    `}
    {...props}
  >
    <path d="M12 15.516q1.453 0 2.484-1.031t1.031-2.484-1.031-2.484-2.484-1.031-2.484 1.031-1.031 2.484 1.031 2.484 2.484 1.031zM19.453 12.984l2.109 1.641q0.328 0.234 0.094 0.656l-2.016 3.469q-0.188 0.328-0.609 0.188l-2.484-0.984q-0.984 0.703-1.688 0.984l-0.375 2.625q-0.094 0.422-0.469 0.422h-4.031q-0.375 0-0.469-0.422l-0.375-2.625q-0.891-0.375-1.688-0.984l-2.484 0.984q-0.422 0.141-0.609-0.188l-2.016-3.469q-0.234-0.422 0.094-0.656l2.109-1.641q-0.047-0.328-0.047-0.984t0.047-0.984l-2.109-1.641q-0.328-0.234-0.094-0.656l2.016-3.469q0.188-0.328 0.609-0.188l2.484 0.984q0.984-0.703 1.688-0.984l0.375-2.625q0.094-0.422 0.469-0.422h4.031q0.375 0 0.469 0.422l0.375 2.625q0.891 0.375 1.688 0.984l2.484-0.984q0.422-0.141 0.609 0.188l2.016 3.469q0.234 0.422-0.094 0.656l-2.109 1.641q0.047 0.328 0.047 0.984t-0.047 0.984z"></path>
  </svg>
);

const RightArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "100%", height = "100%", ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#fff"
    className={css`
      width: ${width};
      height: ${height};
    `}
    {...props}
  >
    <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
  </svg>
);

const LeftArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = "100%", height = "100%", ...props }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#fff"
    className={css`
      width: ${width};
      height: ${height};
    `}
    {...props}
  >
    <path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
  </svg>
);

export {
  FullVolumeIcon,
  FullScreenIcon,
  FullScreenExitIcon,
  LeftArrowIcon,
  OffVolumeIcon,
  PlayIcon,
  PauseIcon,
  RightArrowIcon,
  SettingsIcon,
};
