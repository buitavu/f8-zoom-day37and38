import style from "./UserMenuList.module.scss";
import classNames from "classnames/bind";
import Avata from "../../../../../../assets/imgages/640abe383b5a9.jpg";
const cx = classNames.bind(style);

function UserMenuList({ isOpen }) {
  if (!isOpen) return null;
  return (
    <div className={cx("usermenulist")}>
      <div className={cx("header")}>
        <img className={cx("img")} src={Avata} alt="" />
        <div className={cx("body")}>
          <span className={cx("name")}>Tá Vũ Bùi</span>
          <span className={cx("email")}>@buitavu</span>
        </div>
      </div>

      <ul className={cx("list")}>
        <li className={cx("list-item")}>Trang cá nhân</li>
        <li className={cx("list-item")}>Chứng chỉ của tôi</li>
      </ul>

      <ul className={cx("list")}>
        <li className={cx("list-item")}>Khóa học của tôi</li>
        <li className={cx("list-item")}>Lịch live</li>
        <li className={cx("list-item")}>Bài tập của tôi</li>
        <li className={cx("list-item")}>Luyện đề</li>
      </ul>

      <ul className={cx("list-footer")}>
        <li className={cx("list-item-footer")}>Đăng nhập </li>
        <li className={cx("list-item-footer")}>Đăng xuất</li>
      </ul>
    </div>
  );
}

export default UserMenuList;
