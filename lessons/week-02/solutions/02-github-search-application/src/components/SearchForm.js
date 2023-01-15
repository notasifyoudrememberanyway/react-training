import { useState } from "react";
import classNames from "classnames";

export const SearchForm = ({ setUrl }) => {
  const [searchMode, setSearchMode] = useState("organisation");
  const [organisation, setOrganisation] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const handleOnChange = ({ target }) => {
    const value = target.value;

    if (searchMode === "organisation") {
      setOrganisation(value);
    } else {
      setUsername(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      (searchMode === "organisation" && !organisation) ||
      (searchMode === "username" && !username)
    ) {
      setError(true);
    }

    if (searchMode === "organisation" && organisation) {
      setError(false);
      setUrl(`https://api.github.com/orgs/${organisation}/repos`);
    }

    if (searchMode === "username" && username) {
      setError(false);
      setUrl(`https://api.github.com/users/${username}/repos`);
    }
  };

  const handleClickButtonGroup = ({ target }) => {
    const name = target.name;

    setSearchMode(name);
    setError(false);
  };

  return (
    <section className="search-form mb-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-center">
          <div className="btn-group" role="group">
            <button
              type="button"
              className={classNames("btn", "btn-light", {
                active: searchMode === "organisation",
                "fw-semibold": searchMode === "organisation",
              })}
              name="organisation"
              onClick={handleClickButtonGroup}
            >
              Search by organisation
            </button>
            <button
              type="button"
              className={classNames("btn", "btn-light", {
                active: searchMode === "username",
                "fw-semibold": searchMode === "username",
              })}
              name="username"
              onClick={handleClickButtonGroup}
            >
              Search by username
            </button>
          </div>
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder={`Enter ${searchMode}`}
            value={searchMode === "organisation" ? organisation : username}
            onChange={handleOnChange}
          />
          {error && (
            <div className="form-text text-danger">
              Please enter a valid {searchMode}
            </div>
          )}
        </div>

        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    </section>
  );
};
