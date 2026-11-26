import classNames from "classnames/bind";
import style from "./CourseList.module.scss";
import jvReact from "../../../../../../assets/imgages/13.png";
import jvTouch from "../../../../../../assets/imgages/61a9e9e701506.png";
import jvOnline from "../../../../../../assets/imgages/67f4c93c28d4b.png";
import CoursesItems from "../CoursesItems";

const cx = classNames.bind(style);

const CoursesData = [
  {
    images: jvReact,
    name: "Fullstack Web",
    title: "Học cách đây hôm kia",
    progress: 54,
  },
  {
    images: jvTouch,
    name: "Xây Dựng Website với ReactJS",
    title: "Học cách đây 18 ngày trước",
    progress: 90,
  },
  {
    images: jvOnline,
    name: "App Đừng Chạm Tay Lên Mặt",
    title: "Học cách đây 52 ngày trước",
    progress: 100,
  },
];

function CourseList({ isOpen }) {
  if (!isOpen) return null;
  return (
    <div className={cx("courses-body-wraper")}>
      <div className={cx("courses-header")}>
        <h5 className={cx("courses-headingcr")}>Khóa học của tôi</h5>
        <button className={cx("btn-all")}>Xem tất cả </button>
      </div>
      <div>
        {CoursesData.map((course, index) => {
          return <CoursesItems key={index} data={course} />;
        })}
      </div>
    </div>
  );
}

export default CourseList;
