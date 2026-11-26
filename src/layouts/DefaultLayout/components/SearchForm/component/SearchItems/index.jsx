import classNames from "classnames/bind";
import style from "./SearchItems.module.scss";

const cx = classNames.bind(style);

function SearchItems({ data }) {
  return (
    <div className={cx("searchItems")}>
      <img className={cx("img")} src={data.image} alt={data.name} />
      <div className={cx("searchItems-body")}>
        <span className={cx("name-item")}>{data.name} </span>
        <span className={cx("type-item")}>{data.type} </span>
      </div>
      <button className={cx("status-item")}>{data.status}</button>
    </div>
  );
}

export default SearchItems;
