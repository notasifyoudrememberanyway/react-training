import { useState } from "react";

import { Login } from "./components/Login";
import { Jumbotron } from "./components/Jumbotron";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (formData) => {
    console.log("login form submitted", formData);

    if (
      formData.email === "bob.smith@email.com" &&
      formData.password === "Password123!"
    ) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setIsLoggedIn(false);
      setError("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="container app">
      {!isLoggedIn ? (
        <Login title="Login" handleLogin={handleLogin} error={error} />
      ) : (
        <Jumbotron
          title="Hello, React!!"
          subTitle="This banner element is rendered using React and CSS."
        />
      )}
    </div>
  );
};
