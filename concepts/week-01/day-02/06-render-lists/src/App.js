import { Jumbotron } from "./components/Jumbotron";

const languages = [
  {
    title: "Hello, HTML!!",
    subTitle: "This banner element is rendered using only HTML and CSS.",
  },
  {
    title: "Hello, jQuery!!",
    subTitle: "This banner element is rendered using jQuery and CSS.",
  },
  {
    title: "Hello, React!!",
    subTitle: "This banner element is rendered using React and CSS.",
  },
];

export const App = () => {
  return (
    <div className="container">
      {/* a comment in JSX */}
      {languages.map((language) => {
        return (
          <Jumbotron
            title={language.title}
            subTitle={language.subTitle}
            key={language.title}
          />
        );
      })}
    </div>
  );
};
