import { useEffect, useState } from "react";

import { Jumbotron } from "./components/Jumbotron";
import { Organisations } from "./components/Organisations";
import { Repos } from "./components/Repos";

export const App = () => {
  const [repos, setRepos] = useState();
  const [selectedOrg, setSelectedOrg] = useState();

  // Execute a callback function on componentDidMount
  useEffect(() => {
    if (selectedOrg) {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.github.com/orgs/${selectedOrg}/repos`
        );

        const data = await response.json();

        setRepos(data);
      };

      fetchData();
    }
  }, [selectedOrg]);

  const handleOrgClick = (event) => {
    const orgName = event.target.name;

    setSelectedOrg(orgName);
  };

  const organisations = ["nodejs", "facebook", "mongodb"];

  return (
    <div className="container">
      <Jumbotron />
      <Organisations
        organisations={organisations}
        handleOrgClick={handleOrgClick}
      />
      {repos && <Repos repos={repos} />}
    </div>
  );
};
