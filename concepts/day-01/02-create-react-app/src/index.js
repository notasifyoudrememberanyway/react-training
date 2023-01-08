import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const Jumbotron = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <div className="title">Hello, React!!</div>
        <div className="sub-title">
          This banner element is rendered using React and CSS.
        </div>
      </div>
    </div>
  );
};

const reactContainer = document.getElementById("root");
const root = ReactDOM.createRoot(reactContainer);

root.render(<Jumbotron />);
