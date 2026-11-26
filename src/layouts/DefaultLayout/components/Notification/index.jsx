import "@fortawesome/fontawesome-free/css/all.min.css";
import classNames from "classnames/bind";
import style from "./Notification.module.scss";
import { useEffect, useRef, useState } from "react";
import NotificationLists from "./Component/NotificationLists";

const cx = classNames.bind(style);

function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const handlerClick = (e) => {
      if (!divRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handlerClick);

    return () => {
      document.removeEventListener("mousedown", handlerClick);
    };
  }, []);
  return (
    <div className={cx("notificaton")} ref={divRef}>
      <i onClick={() => setIsOpen(true)} className="fa fa-bell"></i>
      <span className={cx("quantity")}>3</span>

      <NotificationLists isOpen={isOpen} />
    </div>
  );
}

export default Notification;
