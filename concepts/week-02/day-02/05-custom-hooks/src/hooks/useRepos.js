import { useEffect, useState } from "react";
import axios from "axios";

export const useRepos = () => {
  const [repos, setRepos] = useState();
  const [error, setError] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState();

  useEffect(() => {
    if (selectedOrg) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `https://api.github.com/orgs/${selectedOrg}/repos`
          );

          setError(false);
          setRepos(data);
        } catch (error) {
          console.log(`[ERROR]: Failed to fetch data | ${error.message}`);

          setError(true);
          setRepos();
        }
      };

      fetchData();
    }
  }, [selectedOrg]);

  return {
    repos,
    error,
    setSelectedOrg,
  };
};
