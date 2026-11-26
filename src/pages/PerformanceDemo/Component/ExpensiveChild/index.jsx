import { memo } from "react";
import { useMemo } from "react";

function ExpensiveChild({ items }) {
  console.log("ExpensiveChild render");

  const totalLength = items.reduce((total, item) => {
    return total + item.name.length;
  }, 0);

  const longestName = useMemo(() => {
    console.log("Calculating longest name...");
    let longest = "";
    items.forEach((item) => {
      // Thêm delay giả lập tính toán nặng
      for (let i = 0; i < 100000; i++) {}
      if (item.name.length > longest.length) {
        longest = item.name;
      }
    });
    return longest;
  }, [items]);

  return (
    <div>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <p>Total: {totalLength}</p>
      <p>longestName: {longestName}</p>
    </div>
  );
}

export default memo(ExpensiveChild);
