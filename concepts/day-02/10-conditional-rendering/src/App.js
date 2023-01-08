import { Jumbotron } from "./components/Jumbotron";

export const App = () => {
  return (
    <div className="container">
      <Jumbotron
        title="Hello, HTML!!"
        subTitle="This banner element is rendered using only HTML and CSS."
      />

      <Jumbotron title="Hello, jQuery!!" />

      <Jumbotron
        title="Hello, React!!"
        subTitle="This banner element is rendered using React and CSS."
      />
    </div>
  );
};
