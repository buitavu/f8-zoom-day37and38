import Jvbasic from "../../../../../../assets/imgages/6a6f0713abcb0.png";
import Jvadvanced from "../../../../../../assets/imgages/12.png";
import JvPro from "../../../../../../assets/imgages/66aa28194b52b.png";
import Jvlesson1 from "../../../../../../assets/imgages/613cdf402b3b1.jpg";
import Jvlesson2 from "../../../../../../assets/imgages/6172259ab8b80.png";
import Jvvideo from "../../../../../../assets/imgages/maxresdefault.jpg";
import Jvvideo1 from "../../../../../../assets/imgages/maxresdefault1.jpg";
import Jvvideo2 from "../../../../../../assets/imgages/maxresdefault2.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SearchItems from "../SearchItems";
import classNames from "classnames/bind";
import style from "./SearchResult.module.scss";

const cx = classNames.bind(style);

const CourseData = [
  {
    image: Jvbasic,
    name: "Lập Trình JavaScript Cơ Bản",
    type: "Khóa học",
    status: "Đang mở",
  },
  {
    image: Jvadvanced,
    name: "Lập Trình JavaScript Nâng cao",
    type: "Khóa học",
    status: "Đang mở",
  },
  {
    image: JvPro,
    name: "Lập Trình JavaScript Pro",
    type: "Khóa học",
    status: "Đang mở",
  },
];

const LessonData = [
  {
    image: Jvlesson1,
    name: "Sử dụng JavaScript với HTML",
    type: "Lập Trình JavaScript Cơ Bản • Biến, comments, built-in",
    status: "Bài học miễn phí",
  },
  {
    image: Jvlesson2,
    name: "Giải thích các trường hợp &quot;phi lý&quot; trong JavaScript?",
    type: "Lập Trình JavaScript Nâng Cao • Vừa giải trí vừa học",
    status: "Bài học miễn phí",
  },
];

const VideoData = [
  {
    image: Jvvideo,
    name: "Giải thích các trường hợp &quot;phi lý&quot; trong JavaScript?",
    type: "19.464 lượt xem",
    status: "Video",
  },
  {
    image: Jvvideo1,
    name: "Học Xong&quot; Javascript Có Giải Được &quot;Code Thiếu Nhi",
    type: "69.816 lượt xem",
    status: "Video",
  },
  {
    image: Jvvideo2,
    name: "Buy tickets modal Javascript logic",
    type: "34.087 lượt xem",
    status: "Video",
  },
];

function SearchResult({ isOpen, searchForm }) {
  if (!isOpen) return null;
  return (
    <div className={cx("wrapper-searchResult")}>
      <div className={cx("header")}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <span>Kết quả cho "{searchForm}"</span>
      </div>

      <div className={cx("wrraper-section")}>
        <div className={cx("header-section")}>
          <h5 className={cx("header-section-heading")}>Khóa học phù hợp</h5>
          <button className={cx("btn-section")}>Xem thêm</button>
        </div>

        <div className={cx("wrapper-searchItems")}>
          {CourseData.map((course, index) => {
            return <SearchItems key={index} data={course} />;
          })}
        </div>

        <div className={cx("header-section")}>
          <h5 className={cx("header-section-heading")}>Bài học</h5>
          <button className={cx("btn-section")}>Xem thêm</button>
        </div>

        <div className={cx("wrapper-searchItems")}>
          {LessonData.map((course, index) => {
            return <SearchItems key={index} data={course} />;
          })}
        </div>

        <div className={cx("header-section")}>
          <h5 className={cx("header-section-heading")}>Video</h5>
          <button className={cx("btn-section")}>Xem thêm</button>
        </div>

        <div className={cx("wrapper-searchItems")}>
          {VideoData.map((course, index) => {
            return <SearchItems key={index} data={course} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
