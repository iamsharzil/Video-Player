import { css, cx } from "@emotion/css";
import { RightArrowIcon } from "src/icons";

type LiProps = React.HTMLAttributes<HTMLLIElement> & {
  value?: string | number;
  index?: number;
  onClick?: (_e: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => void;
};

export const ListItem: React.FC<LiProps> = ({ className, title, value, index, onClick, ...props }) => {
  return (
    <li
      className={cx([
        css`
          padding: 0.8rem;
          &:hover {
            background: rgba(255, 255, 255, 0.1);
          }
        `,
        className,
      ])}
      role="listitem"
      aria-haspopup="true"
      onClick={(e) => onClick(e, index)}
      {...props}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <span aria-label={title.toString()}>{title}</span>
        {value && (
          <div
            className={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <span aria-label={`Normal Speed`}>{value}</span>
            <RightArrowIcon width="1.3rem" />
          </div>
        )}
      </div>
    </li>
  );
};
