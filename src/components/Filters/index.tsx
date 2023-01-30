import { useState } from "react";
import { ColourFilterItem } from "../ColourFilterItem";
import { Button } from "../Button";
import { ShapeFilterItem } from "../ShapeFilterItem";
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterSlice } from "../../store/reducers/FilterSlice";
import { FilterButton } from "../FilterButton";
import { RxCross2 } from "react-icons/rx";

export const Filters = () => {
  const [currentFilterMenu, setCurrentFilterMenu] = useState<string>("");
  const { allFilters, filters } = useAppSelector(
    (state) => state.filterReducer
  );

  const { setColour, setShape } = filterSlice.actions;
  const dispatch = useAppDispatch();

  const { colour: allColours, shape: allShapes } = allFilters;
  const { colour, shape } = filters;

  const setFilterMenu = (menu: string) => {
    if (currentFilterMenu === menu) {
      setCurrentFilterMenu("");
      return;
    }
    setCurrentFilterMenu(menu);
  };

  const isChecked = (elem: string, group: Array<string>) => {
    return group.indexOf(elem) >= 0;
  };

  const shapeItemClick = (elem: string) => {
    dispatch(setShape(elem));
  };

  const colourItemClick = (elem: string) => {
    dispatch(setColour(elem));
  };

  return (
    <div className="filters">
      <div className="filters__buttons-wrapper">
        <Button
          onClick={() => setFilterMenu("colour")}
          additionalClasses="filters__button"
        >
          colour
        </Button>
        <Button
          onClick={() => setFilterMenu("shape")}
          additionalClasses="filters__button"
        >
          shape
        </Button>
      </div>
      <div className="filters__buttons-wrapper_mobile">
        <Button additionalClasses="filters__button filters__button_mobile">
          <span onClick={() => setFilterMenu("colour")}>colour</span>|
          <span onClick={() => setFilterMenu("shape")}>shape</span>
        </Button>
      </div>
      <div
        className={
          "filters__menu " + (currentFilterMenu ? "filters__menu_opened" : "")
        }
      >
        {currentFilterMenu && (
          <>
            {currentFilterMenu === "shape" ? (
              <div className="filters__menu-content filters__shape-filters">
                {allShapes.map((e) => {
                  return (
                    <ShapeFilterItem
                      key={e}
                      label={e}
                      onClick={() => shapeItemClick(e)}
                      isChecked={isChecked(e, shape)}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="filters__menu-content filters__colour-filters">
                {allColours.map((e) => {
                  return (
                    <ColourFilterItem
                      onClick={() => colourItemClick(e)}
                      key={e}
                      label={e}
                      img={`https://d32y5z2afvomc1.cloudfront.net/colours/${e}.png`}
                      isChecked={isChecked(e, colour)}
                    />
                  );
                })}
              </div>
            )}
          </>
        )}
        {colour.length || shape.length ? (
          <div className="filters__filters-info">
            {colour.map((e) => {
              return (
                <FilterButton onClick={() => dispatch(setColour(e))} key={e}>
                  {e}
                  <RxCross2 />
                </FilterButton>
              );
            })}
            {shape.map((e) => {
              return (
                <FilterButton onClick={() => dispatch(setShape(e))} key={e}>
                  {e}
                  <RxCross2 />
                </FilterButton>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
