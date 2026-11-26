import CoursesProgress from "../CourseProgress";
import style from "./CourseItems.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function CoursesItems({ data }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("img")} src={data.images} alt={data.name} />
      <div className={cx("body")}>
        <span className={cx("name")}>{data.name}</span>
        <span className={cx("title")}>{data.title}</span>

        <CoursesProgress progress={data.progress} />
      </div>
    </div>
  );
}

export default CoursesItems;
