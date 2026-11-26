import { useEffect, useRef, useState } from "react";
import CourseList from "./component/CourseList";
import classNames from "classnames/bind";
import style from "./MyCourses.module.scss";

const cx = classNames.bind(style);

function MyCourses() {
  const [isOpenCourses, setIsOpenCourses] = useState(false);
  const coursesRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!coursesRef.current?.contains(e.target)) {
        setIsOpenCourses(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={cx("wrraper")} ref={coursesRef}>
      <button
        onClick={() => setIsOpenCourses(true)}
        className={cx("courses-btn")}
      >
        <span>Khóa học của tôi</span>
      </button>
      <CourseList isOpen={isOpenCourses} />
    </div>
  );
}

export default MyCourses;
