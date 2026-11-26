import { useNavigate } from "react-router-dom";
import imgages from "../../../../assets/imgages/694743c405102.png";
import classNames from "classnames/bind";
import style from "./AppLogo.module.scss";

const cx = classNames.bind(style);

function AppLogo() {
  const navigate = useNavigate();

  return (
    <div className={cx("logo")}>
      <img
        className={cx("image")}
        onClick={() => navigate("/")}
        src={imgages}
        alt="F8 Logo"
      />
      <span className={cx("title")} onClick={() => navigate("/")}>
        Học Lập Trình Để Đi Làm
      </span>
    </div>
  );
}

export default AppLogo;
