import style from "./CourseProgress.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function CoursesProgress({ progress }) {
  return (
    <div className={cx("wrapper")}>
      <div
        style={{
          backgroundColor: "red",
          height: "100%",
          width: `${progress}%`,
          borderRadius: "6px",
        }}
      ></div>
    </div>
  );
}

export default CoursesProgress;
