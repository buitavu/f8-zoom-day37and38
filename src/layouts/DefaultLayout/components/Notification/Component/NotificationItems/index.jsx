import classNames from "classnames/bind";
import style from "./NotificationItems.module.scss";

const cx = classNames.bind(style);

function NotificationItems({ data }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("img")} src={data.image} alt={data.name} />
      <div className={cx("body")}>
        <span className={cx("name")}>{data.name}</span>
        <span className={cx("title")}>{data.title}</span>
      </div>
    </div>
  );
}

export default NotificationItems;
