import { useParams } from "react-router-dom";

import { Banner } from "../components/Banner";

export const Project = () => {
  const { projectId } = useParams();

  return <Banner title="Project" info={projectId} />;
};
