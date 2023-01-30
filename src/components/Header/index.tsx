import { Filters } from "../Filters";
import { Heading } from "../Heading";
import { Menu } from "../Menu";
import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__top-elements">
        <Menu />
        <img
          src={require("../../assets/logo.png")}
          alt=""
          className="header__logo"
        />
      </div>
      <div className="header__bottom-elements">
        <Heading />
        <Filters />
      </div>
    </header>
  );
};
