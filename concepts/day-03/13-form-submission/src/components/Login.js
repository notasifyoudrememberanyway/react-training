import { useState } from "react";

import { FormTitle } from "./FormTitle";

export const Login = ({ title, onSuccess, onFailure }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget }) => {
    if (currentTarget.name === "email") {
      setEmail(currentTarget.value);
    }

    if (currentTarget.name === "password") {
      setPassword(currentTarget.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter an email and password");
      onFailure();
    } else if (email === "bob.smith@email.com" && password === "Password123!") {
      setError("");
      onSuccess();
    } else {
      setError("Invalid credentials, please try again.");
      onFailure();
    }
  };

  return (
    <div className="login">
      {title && <FormTitle title={title} />}
      <form className="login-form" onSubmit={handleSubmit}>
        {/* email address form input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email address"
            value={email}
            onChange={handleChange}
          />
        </div>

        {/* password form input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
          />
        </div>

        {/* submit button */}
        <div class="d-grid gap-2 col-6 mx-auto pt-4">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>

        {/* display error */}
        {error && <div className="text-center pt-4 text-danger">{error}</div>}
      </form>
    </div>
  );
};
