import { useState } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(props.initialValue);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => (count > 0 ? count - 1 : 0));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <section className="jumbotron">
      <div class="alert alert-primary" role="alert">
        <h3>Counter: {count}</h3>
      </div>

      <div className="counter-controls">
        <button
          className="btn btn-success counter-control"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-warning counter-control"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="btn btn-danger counter-control"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </section>
  );
};
