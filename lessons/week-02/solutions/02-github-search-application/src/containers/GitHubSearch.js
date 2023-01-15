import { useEffect, useState } from "react";
import axios from "axios";

import { SearchForm } from "../components/SearchForm";
import { Repos } from "../components/Repos";

export const GitHubSearch = () => {
  const [repos, setRepos] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(url);

          setRepos(data);
        } catch {
          setRepos([]);
        }
      };

      fetchData();
    }
  }, [url]);

  return (
    <section>
      <SearchForm setUrl={setUrl} />
      {repos && <Repos repos={repos} />}
    </section>
  );
};
