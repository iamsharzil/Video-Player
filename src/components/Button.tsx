import { css, cx } from "@emotion/css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cx([
        css`
          background: transparent;
          border: none;
          cursor: pointer;
          width: 100%;
          height: 100%;
          outline: none;
          padding: 0 0.2rem;
          margin: 0.5rem 0.25rem;
          opacity: 0.9;

          &:hover {
            opacity: 1;
          }
        `,
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};
