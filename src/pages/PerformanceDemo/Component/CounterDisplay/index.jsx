import { memo } from "react";

function CounterDisplay({ counter }) {
  console.log("CounterDisplay render");
  return (
    <div>
      <h2>Số Couter: {counter}</h2>
    </div>
  );
}

export default memo(CounterDisplay);
