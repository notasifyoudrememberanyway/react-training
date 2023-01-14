import { faker } from "@faker-js/faker";

export const getRandomWords = (numberOfWords = 10) => {
  const words = faker.random.words(numberOfWords);

  return words.split(" ").map((word) => word.toUpperCase());
};
