import { ProjectCard } from "./ProjectCard";

import weatherApp from "../images/weather-app.jpg";
import passwordGenerator from "../images/password-generator.jpg";
import gitHubSearch from "../images/github-search.jpg";
import workoutTracker from "../images/workout-tracker.jpg";

const projects = [
  {
    title: "Password Generator",
    gitHubUrl: "#",
    appUrl: "#",
    image: {
      src: passwordGenerator,
      alt: "number padlock on a keyboard",
    },
  },
  {
    title: "GitHub Search",
    gitHubUrl: "#",
    appUrl: "#",
    image: {
      src: gitHubSearch,
      alt: "search engine app for GitHub",
    },
  },
  {
    title: "Weather Dashboard",
    gitHubUrl: "#",
    appUrl: "#",
    image: {
      src: weatherApp,
      alt: "cyclone weather",
    },
  },
  {
    title: "Workout Tracker",
    gitHubUrl: "#",
    appUrl: "#",
    image: {
      src: workoutTracker,
      alt: "various gym equipments",
    },
  },
];

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container py-5">
        <h1 className="text-center">My Projects</h1>
        <h2 className="fs-5 text-center text-muted">
          Full-stack projects using React
        </h2>
        <hr />
        <div className="projects-container">
          {projects.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
