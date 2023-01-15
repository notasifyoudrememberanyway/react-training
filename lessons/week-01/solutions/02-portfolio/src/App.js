import { NavigationBar } from "./components/NavigationBar";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { ContactMe } from "./components/ContactMe";

export const App = () => {
  return (
    <main>
      <NavigationBar />
      <AboutMe />
      <Projects />
      <ContactMe />
    </main>
  );
};
