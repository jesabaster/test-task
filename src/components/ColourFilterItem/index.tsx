import { IColourFilterItemProps } from "./types";
import "./styles.scss";

export const ColourFilterItem: React.FC<IColourFilterItemProps> = ({
  img,
  label,
  isChecked,
  ...rest
}) => {
  return (
    <div className="color-filter-item" {...rest}>
      <img
        src={img}
        alt=""
        className={
          "color-filter-item__img " +
          (isChecked ? "color-filter-item__img_checked" : "")
        }
      />
      <div className="color-filter-item__label">{label}</div>
    </div>
  );
};
