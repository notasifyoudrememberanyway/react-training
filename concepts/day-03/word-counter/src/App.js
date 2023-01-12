import { Banner } from "./components/Banner";
import { WordCounter } from "./components/WordCounter";

export const App = () => {
  return (
    <div className="container">
      <Banner />
      <WordCounter />
    </div>
  );
};
