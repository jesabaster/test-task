import { IButtonProps } from "./types.d";
import "./styles.scss";

export const Button: React.FC<IButtonProps> = ({
  children,
  primary,
  additionalClasses,
  ...rest
}) => {
  return (
    <button
      className={
        `${primary ? "primary-button " : "secondary-button "}` +
        additionalClasses
      }
      {...rest}
    >
      {children}
    </button>
  );
};
