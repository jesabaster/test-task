import { IFilterButtonProps } from "./types";
import "./styles.scss";

export const FilterButton: React.FC<IFilterButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <button className="filter-button" {...rest}>
      {children}
    </button>
  );
};
