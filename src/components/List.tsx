import { css } from "@emotion/css";

type UlProps = React.HTMLAttributes<HTMLUListElement> & {
  visible?: boolean;
};

export const List: React.FC<UlProps> = ({ visible, children, ...props }) => {
  return (
    <ul
      aria-hidden={visible}
      role="list"
      className={css`
        list-style: none;
        color: #fff;
        margin: 0;
        padding: 0;
        font-size: 0.9rem;
        display: ${visible ? "block" : "none"};
      `}
      {...props}
    >
      {children}
    </ul>
  );
};
