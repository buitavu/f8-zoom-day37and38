import classNames from "classnames/bind";
import style from "./SearchForm.module.scss";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SearchResult from "./component/SearchResult";

const cx = classNames.bind(style);

function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchForm, setSearchForm] = useState("");

  return (
    <div className={cx("search")}>
      <div className={cx("icon-search")}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <input
        className={cx("input-search")}
        type="text"
        placeholder="Tìm khóa học,bài tập,hỏi đáp..."
        onChange={(e) => setSearchForm(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />

      <SearchResult isOpen={isOpen} searchForm={searchForm} />
    </div>
  );
}

export default SearchForm;
