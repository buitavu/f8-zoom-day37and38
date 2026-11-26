import AppLogo from "../AppLogo";
import SearchForm from "../SearchForm";
import MyCourses from "../MyCourses";
import Notification from "../Notification";
import UserMenu from "../UserMenu";
import classNames from "classnames/bind";
import style from "./Header.module.scss";

const cx = classNames.bind(style);
function Header() {
  return (
    <div className={cx("wrraper")}>
      <AppLogo />
      <div className={cx("header-sr")}>
        <SearchForm />
      </div>
      <MyCourses />
      <Notification />
      <UserMenu />
    </div>
  );
}

export default Header;
