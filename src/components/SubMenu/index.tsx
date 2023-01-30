import React, { useState } from "react";
import { Button } from "../Button";
import "./styles.scss";
import { ISubMenuProps } from "./types";
import { GoTriangleRight } from "react-icons/go";
import { collectionSlice } from "../../store/reducers/CollectionSlice";
import { useAppDispatch } from "../../hooks/redux";
import { ICollection } from "../../models/ICollection";
import ReactLoading from "react-loading";

export const SubMenu: React.FC<ISubMenuProps> = ({
  label,
  items,
  setMenu,
  isLoading,
}) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const { setCollection } = collectionSlice.actions;
  const dispatch = useAppDispatch();

  const convertName = (name: string) => {
    return name.split(" ")[1];
  };

  const menuButtonClickHandler = (element: ICollection) => {
    dispatch(setCollection(element));
    setMenu(false);
  };
  return (
    <>
      <div className="sub-menu">
        <button className="sub-menu__label">
          {label} <GoTriangleRight className="sub-menu__triangle" />
        </button>
        <div className="sub-menu__content">
          {isLoading ? (
            <div className="sub-menu__loading">
              <ReactLoading type="spin" height={30} width={30} color="black" />
            </div>
          ) : (
            items.map((e) => {
              return (
                <Button
                  primary={true}
                  key={e.id}
                  style={{ width: "100%" }}
                  additionalClasses="sub-menu__button"
                  onClick={() => menuButtonClickHandler(e)}
                >
                  {convertName(e.name)}
                </Button>
              );
            })
          )}
        </div>
      </div>
      <div
        className={
          "sub-menu-mobile " + (menuOpened ? "sub-menu-mobile_opened" : "")
        }
      >
        <button
          className="sub-menu-mobile__label"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          {label} <GoTriangleRight className="sub-menu-mobile__triangle" />
        </button>
        <div className="sub-menu-mobile__content">
          {isLoading ? (
            <div className="sub-menu-mobile__loading">
              <ReactLoading type="spin" height={30} width={30} color="black" />
            </div>
          ) : (
            items.map((e) => {
              return (
                <Button
                  primary={true}
                  key={e.id}
                  style={{ width: "100%" }}
                  additionalClasses="sub-menu-mobile__button"
                  onClick={() => menuButtonClickHandler(e)}
                >
                  {convertName(e.name)}
                </Button>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
