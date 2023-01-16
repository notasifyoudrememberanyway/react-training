import { useSearchParams } from "react-router-dom";

import { Banner } from "../components/Banner";

export const Search = () => {
  const [search] = useSearchParams();

  return <Banner title="Search" info={search.get("city")} />;
};
