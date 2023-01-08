import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Jumbotron = () => {
  const language = "React";

  const getSum = (num1, num2) => {
    return num1 + num2;
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <div className="title">Hello, {language}!!</div>
        <div className="sub-title">
          Evaluate in-line expressions: 2 + 3 = {2 + 3}
        </div>
        <div className="sub-title">
          Evaluate function executions: {getSum(20, 30)}
        </div>
        <div className="sub-title">
          Evaluate ternary: {Math.random() > 0.5 ? "Hello" : "Goodbye"}
        </div>
      </div>
    </div>
  );
};

const reactContainer = document.getElementById("root");

const root = ReactDOM.createRoot(reactContainer);

root.render(<Jumbotron />);
