import "./styles.scss";
import { useAppSelector } from "../../hooks/redux";

export const Heading = () => {
  const { currentCollection } = useAppSelector(
    (state) => state.collectionReducer
  );
  return (
    <div className="heading-wrapper">
      <h2 className="heading-wrapper__heading">{currentCollection.name}</h2>
    </div>
  );
};
