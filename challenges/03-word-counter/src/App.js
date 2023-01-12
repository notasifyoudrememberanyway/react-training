import { Jumbotron } from "./components/Jumbotron";
import { WordCounter } from "./components/WordCounter";

export const App = () => {
  return (
    <div className="container">
      <Jumbotron
        title="Word Counter"
        subTitle="Copy and paste your text or simply type in the box below to count the number of words."
      />
      <WordCounter />
    </div>
  );
};
