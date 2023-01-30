import { SubMenu } from "../SubMenu";
import { Button } from "../Button";
import "./styles.scss";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCollections } from "../../store/reducers/ActionCreators";

export const Menu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const { collections } = useAppSelector((state) => state.collectionReducer);
  const dispatch = useAppDispatch();
  const sunglasses = collections.collections.filter(
    (e) => e.name.split(" ")[0] === "Sunglasses"
  );
  const spectacles = collections.collections.filter(
    (e) => e.name.split(" ")[0] === "Spectacles"
  );

  useEffect(() => {
    dispatch(fetchCollections());
  }, []);

  return (
    <>
      <div className="menu">
        <Button additionalClasses="menu__main-button">Menu</Button>
        <div className="menu__content">
          <SubMenu
            label="sunglasses"
            items={sunglasses}
            setMenu={setIsMenuOpened}
            isLoading={collections.isLoading}
          />
          <SubMenu
            label="spectacles"
            items={spectacles}
            setMenu={setIsMenuOpened}
            isLoading={collections.isLoading}
          />
          <Button primary={true} additionalClasses="menu__button">
            Try at home
          </Button>
          <Button primary={true} additionalClasses="menu__button">
            Pair for Pair
          </Button>
        </div>
      </div>
      <div
        className={"mobile-menu " + (isMenuOpened ? "mobile-menu_opened" : "")}
      >
        <Button
          additionalClasses="mobile-menu__main-button"
          onClick={() => setIsMenuOpened((prev) => !prev)}
        >
          {isMenuOpened ? <AiOutlineClose size="28px" /> : "Menu"}
        </Button>
        <div className="mobile-menu__content">
          <SubMenu
            label="sunglasses"
            items={sunglasses}
            setMenu={setIsMenuOpened}
            isLoading={collections.isLoading}
          />
          <SubMenu
            label="spectacles"
            items={spectacles}
            setMenu={setIsMenuOpened}
            isLoading={collections.isLoading}
          />
          <Button primary={true} additionalClasses="mobile-menu__button">
            Try at home
          </Button>
          <Button primary={true} additionalClasses="mobile-menu__button">
            Pair for Pair
          </Button>
        </div>
      </div>
    </>
  );
};
