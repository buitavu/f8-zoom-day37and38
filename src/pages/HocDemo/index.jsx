import UserProfile from "../../components/UserProfile/UserProfile";
import ProductList from "../../components/ProductList/ProductList";
import { useState } from "react";
import style from "./HocDemo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function HocDemo() {
  const [userLoanding, setUserLoading] = useState(true);
  const [producLoading, setProducLoading] = useState(true);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("user")}>
        <h2>User</h2>
        <button
          className={cx("btn-user")}
          onClick={() => setUserLoading((prev) => !prev)}
        >
          Toggle User Loading
        </button>

        <div className={cx("body-user")}>
          <UserProfile isLoading={userLoanding} />
        </div>
      </div>

      <div className={cx("product")}>
        <h2>Product</h2>
        <button
          className={cx("btn-product")}
          onClick={() => setProducLoading((prev) => !prev)}
        >
          Toggle Product Loading
        </button>
        <div className={cx("body-product")}>
          <ProductList isLoading={producLoading} />
        </div>
      </div>
    </div>
  );
}

export default HocDemo;
