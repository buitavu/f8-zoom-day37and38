import { useEffect, useRef, useState } from "react";
import Avata from "../../../../assets/imgages/640abe383b5a9.jpg";
import style from "./UserMenu.module.scss";
import classNames from "classnames/bind";
import UserMenuList from "./Componetn/UserMenuList";

const cx = classNames.bind(style);

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const divReff = useRef(null);
  useEffect(() => {
    const handlerClickEvent = (e) => {
      if (!divReff.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handlerClickEvent);

    return () => {
      document.removeEventListener("mousedown", handlerClickEvent);
    };
  }, []);
  return (
    <div className={cx("usermenu")} ref={divReff}>
      <img
        onClick={() => setIsOpen(true)}
        className={cx("img")}
        src={Avata}
        alt="hình ảnh của tôi"
      />

      <UserMenuList isOpen={isOpen} />
    </div>
  );
}

export default UserMenu;
