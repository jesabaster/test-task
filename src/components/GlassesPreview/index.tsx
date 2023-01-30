import { IGlassesPreviewProps } from "./types";
import "./styles.scss";

export const GlassesPreview: React.FC<IGlassesPreviewProps> = ({
  name,
  img,
}) => {
  return (
    <div className="glasses-preview" style={{ backgroundImage: `url(${img})` }}>
      <div className="glasses-preview__label">{name}</div>
    </div>
  );
};
