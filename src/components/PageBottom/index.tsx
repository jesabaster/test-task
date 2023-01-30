import { IPageBottomProps } from "./types";
import "./styles.scss";
import { Button } from "../Button";

export const PageBottom: React.FC<IPageBottomProps> = ({ isLast }) => {
  return (
    <div className="page-bottom">
      {isLast ? (
        <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top
        </Button>
      ) : (
        <div className="page-bottom__loading">Loading...</div>
      )}
    </div>
  );
};
