import { useState } from "react";

import { Control } from "./components/Control";
import { Jumbotron } from "./components/Jumbotron";
import { ReposButton } from "./containers/ReposButton";
import { ReposSelect } from "./containers/ReposSelect";

export const App = () => {
  const [mode, setMode] = useState("button");

  const handleClick = (event) => {
    const { name } = event.target;

    setMode(name);
  };

  const organisations = ["nodejs", "facebook", "mongodb"];

  return (
    <div className="container">
      <Jumbotron />
      <Control handleClick={handleClick} />
      {mode === "button" && <ReposButton organisations={organisations} />}
      {mode === "select" && <ReposSelect organisations={organisations} />}
    </div>
  );
};
