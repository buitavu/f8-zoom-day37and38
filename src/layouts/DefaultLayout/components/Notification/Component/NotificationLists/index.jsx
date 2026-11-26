import classNames from "classnames/bind";
import style from "./NotificationLists.module.scss";
import JvMesage from "../../../../../../assets/imgages/6870d57b274a2.png";
import JvMesage1 from "../../../../../../assets/imgages/694743c405102.png";
import JvMesage2 from "../../../../../../assets/imgages/694743c405102.png";
import NotificationItems from "../NotificationItems";

const cx = classNames.bind(style);

const MyNotificationItems = [
  {
    image: JvMesage,
    name: "Vũ Quốc Dũng đã nhắc tới bạn trong một bình luận",
    title: "3 ngày trước",
  },
  {
    image: JvMesage1,
    name: "Vũ Quốc Dũng đã nhắc tới bạn trong một bình luận",
    title: "3 ngày trước",
  },
  {
    image: JvMesage2,
    name: "Vũ Quốc Dũng đã nhắc tới bạn trong một bình luận",
    title: "3 ngày trước",
  },
];

function NotificationLists({ isOpen }) {
  if (!isOpen) return null;
  return (
    <div className={cx("NotificationItems")}>
      <div className={cx("heading")}>
        <span className={cx("heading-message")}>Thông báo</span>
        <button className={cx("heading-done")}>
          <span>Đánh dấu đã đọc</span>
        </button>
      </div>
      <div>
        {MyNotificationItems.map((notificaton, index) => {
          return <NotificationItems key={index} data={notificaton} />;
        })}
      </div>
    </div>
  );
}

export default NotificationLists;
