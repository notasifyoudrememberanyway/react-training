import { useState } from "react";

import { Login } from "./components/Login";
import { Jumbotron } from "./components/Jumbotron";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = () => {
    setIsLoggedIn(true);
  };

  const onFailure = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container app">
      {!isLoggedIn ? (
        <Login title="Login" onSuccess={onSuccess} onFailure={onFailure} />
      ) : (
        <Jumbotron
          title="Bob Smith"
          subTitle="Hello, you are now authorised to use the website."
        />
      )}
    </div>
  );
};
