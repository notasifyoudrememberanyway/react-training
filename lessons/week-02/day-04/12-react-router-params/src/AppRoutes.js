import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Projects } from "./pages/Projects";
import { Project } from "./pages/Project";
import { Search } from "./pages/Search";
import { NoMatch } from "./pages/NoMatch";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<Project />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
