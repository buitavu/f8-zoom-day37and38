import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./GoToTop.module.scss";

const cx = classNames.bind(style);

function GoToTop() {
  const [show, setShow] = useState();
  useEffect(() => {
    const handlerScrooll = () => {
      if (window.scrollY >= 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handlerScrooll);
    return () => {
      window.removeEventListener("scroll", handlerScrooll);
    };
  }, []);

  const handlerbackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {show && (
        <button
          onClick={handlerbackToTop}
          className={cx("btn", { show: show })}
        >
          ⬆️
        </button>
      )}
    </div>
  );
}

export default GoToTop;
