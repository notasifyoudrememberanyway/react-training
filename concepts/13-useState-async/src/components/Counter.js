import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const handleIncrementClickAsync = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div className="jumbotron">
      <div className="title">Async State</div>
      <div className="sub-title">Counter: {count}</div>
      <div className="p-3">
        <button className="btn btn-success" onClick={handleIncrementClick}>
          Increment
        </button>
      </div>
      <div className="p-3">
        <button className="btn btn-success" onClick={handleIncrementClickAsync}>
          Increment Async
        </button>
      </div>
    </div>
  );
};
