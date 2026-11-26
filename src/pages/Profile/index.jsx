import { useEffect, useState } from "react";
import ImgUser from "../../assets/imgages/OIP.jpg";
import style from "./Profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const styles = {
  avatar: {
    width: 200,
    heaght: 500,
    borderRadius: "50%",
  },
};

function Profile() {
  const [preViewURL, setPreViewURL] = useState(null);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(preViewURL);
    };
  }, [preViewURL]);
  const handlerChange = (e) => {
    const img = e.target.files[0];
    const previe = URL.createObjectURL(img);
    setPreViewURL(previe);
  };
  return (
    <div className={cx("wrapper")}>
      <label>
        <input accept="image/*" type="file" hidden onChange={handlerChange} />
        <img style={styles.avatar} src={preViewURL || ImgUser} alt="" />
        <p className={cx("title")}>Thay đổi ảnh đại diện</p>
      </label>
    </div>
  );
}

export default Profile;
