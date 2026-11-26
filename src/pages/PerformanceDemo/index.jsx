import { useCallback, useState } from "react";
import CounterDisplay from "./Component/CounterDisplay";
import ActionButtons from "./Component/ActionButtons";
import ExpensiveChild from "./Component/ExpensiveChild";

function PerformanceDemo() {
  const [counter, setCounter] = useState(0);
  const [changName, setChangName] = useState("Vũ");
  const [addItems, setAddItems] = useState([
    {
      id: 1,
      name: "Học React tại F8",
    },
  ]);

  const handleIncrement = useCallback(() => {
    setCounter((prevCount) => prevCount + 1);
  }, []);

  const handlerReset = () => {
    setCounter(0);
  };

  const handlerChangName = useCallback(() => {
    setChangName((prevChang) => (prevChang === "Vũ" ? "F8" : "Vũ"));
  });

  const handlerAddItems = useCallback(() => {
    setAddItems((prevItem) => [
      ...prevItem,
      {
        id: prevItem.length + 1,
        name: "Tìm hiểu về React",
      },
    ]);
  });

  return (
    <div>
      <h2>PerformanceDemo</h2>

      <p>Name {changName}</p>
      <button onClick={handlerChangName}>Chang Name</button>
      <button onClick={handlerAddItems}>AddItems</button>
      <CounterDisplay counter={counter} />
      <ActionButtons onIncrement={handleIncrement} onReset={handlerReset} />
      <ExpensiveChild items={addItems} />
    </div>
  );
}

export default PerformanceDemo;
