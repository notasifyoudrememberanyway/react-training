import { useEffect, useState } from "react";

import { Jumbotron } from "./components/Jumbotron";
import { Words } from "./components/Words";

import { getRandomWords } from "./utils/getRandomWords";

export const App = () => {
  const [words, setWords] = useState([]);

  // Execute a callback function on componentDidMount
  useEffect(() => {
    const randomWords = getRandomWords();

    setWords(randomWords);
  }, []);

  return (
    <div className="container">
      <Jumbotron />
      <Words words={words} />
    </div>
  );
};
