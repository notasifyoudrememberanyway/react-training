import { useState } from "react";

export const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (event) => {
    // get the value of the textarea
    const words = event.target.value;

    // convert string to an array
    const wordsArray = words.split(" ");

    // get array length
    const wordsArrayLength = wordsArray.length;

    // set word length as new wordCount state
    setWordCount(wordsArrayLength);
  };

  return (
    <section className="border p-4">
      <div>
        <textarea
          className="form-control"
          placeholder="Please enter your text here..."
          onChange={handleChange}
          rows={10}
        />
      </div>
      <div className="text-center pt-4">
        <h3 className="fs-5">Word count: {wordCount}</h3>
      </div>
    </section>
  );
};
