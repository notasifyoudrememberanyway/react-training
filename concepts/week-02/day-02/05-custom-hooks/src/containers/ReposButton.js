import { Buttons } from "../components/Buttons";
import { Repos } from "../components/Repos";
import { Error } from "../components/Error";
import { useRepos } from "../hooks/useRepos";

export const ReposButton = ({ organisations }) => {
  const { repos, error, setSelectedOrg } = useRepos();

  const handleClick = (event) => {
    const { name } = event.target;

    setSelectedOrg(name);
  };

  return (
    <div className="container">
      <Buttons organisations={organisations} handleClick={handleClick} />
      {error && <Error />}
      {repos && <Repos repos={repos} />}
    </div>
  );
};
