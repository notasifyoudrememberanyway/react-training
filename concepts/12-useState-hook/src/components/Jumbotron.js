import { useState } from "react";

export const Jumbotron = () => {
  const [mode, setMode] = useState("success");

  const handleButtonClick = () => {
    setMode((mode) => (mode === "success" ? "danger" : "success"));
  };

  return (
    <div className="jumbotron">
      <div className="title">Hello, React!!</div>
      <div className="sub-title">
        This banner element is rendered using React and CSS.
      </div>
      <div className="p-3">
        <button className={`btn btn-${mode}`} onClick={handleButtonClick}>
          Toggle Button
        </button>
      </div>
    </div>
  );
};
