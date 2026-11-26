import { useEffect, useRef, useState } from "react";
import { CustomInput } from "../../components/CustomInput";
import style from "./FocusDemo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function FocusDemo() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const rederCount = useRef(0);

  useEffect(() => {
    rederCount.current += 1;
    console.log("Render count:", rederCount.current);
  });

  const handlerFocus1 = () => {
    input1Ref.current.focus();
  };

  const handlerFocus2 = () => {
    input2Ref.current.focus();
  };

  const handlerClearBoth = () => {
    setInput1("");
    setInput2("");
  };
  const handlerGetValue = () => {
    const inputValue1 = input1Ref.current.getValue();
    const inputValue2 = input2Ref.current.getValue();
    alert(`value1: ${inputValue1}, value2: ${inputValue2}  `);
  };

  return (
    <div className={cx("wrapper")}>
      <h4>CustomInput:</h4>
      <div className={cx("wrapper-input")}>
        <h2>Input 1</h2>
        <CustomInput
          className={cx("input")}
          value={input1}
          ref={input1Ref}
          placeholder="input1"
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>
      <div className={cx("wrapper-input")}>
        <h2>Input 2</h2>
        <CustomInput
          className={cx("input")}
          value={input2}
          ref={input2Ref}
          placeholder="input2"
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <div className={cx("wrapper-btn")}>
        <button className={cx("btn")} onClick={handlerFocus1}>
          Focus Input 1
        </button>
        <button className={cx("btn")} onClick={handlerFocus2}>
          Focus Input 2
        </button>
        <button className={cx("btn")} onClick={handlerClearBoth}>
          Clear Both
        </button>
        <button className={cx("btn")} onClick={handlerGetValue}>
          Get Values
        </button>
      </div>
    </div>
  );
}

export default FocusDemo;
