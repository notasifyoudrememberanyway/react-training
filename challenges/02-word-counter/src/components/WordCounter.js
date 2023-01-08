import { useState } from "react";

export const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (event) => {
    // get the value from the text area
    const value = event.currentTarget.value;

    // convert the string to array if words and filter all ""
    const words = value.split(" ").filter((e) => e);

    // set the state to the length of the words array
    setWordCount(words.length);
  };

  return (
    <div className="word-counter">
      <textarea
        rows={10}
        onChange={handleChange}
        placeholder="Enter your text here or copy and paste your text here..."
      ></textarea>
      <div className="info">Word count: {wordCount}</div>
    </div>
  );
};
