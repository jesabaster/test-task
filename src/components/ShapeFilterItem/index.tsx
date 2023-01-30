import { IShapeFilterItemProps } from "./types";
import "./styles.scss";

export const ShapeFilterItem: React.FC<IShapeFilterItemProps> = ({
  label,
  isChecked,
  ...rest
}) => {
  return (
    <div
      className={
        "shape-filter-item " + (isChecked ? "shape-filter-item_checked" : "")
      }
      {...rest}
    >
      {label}
    </div>
  );
};
