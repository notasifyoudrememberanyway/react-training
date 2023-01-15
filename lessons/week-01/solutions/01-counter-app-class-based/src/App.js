import { Counter } from "./components/Counter";
import { Jumbotron } from "./components/Jumbotron";

export const App = () => {
  return (
    <main className="container">
      <Jumbotron
        title="React Counter"
        subTitle="Please use the buttons to interact with your counter"
      />
      <Counter initialValue={0} />
    </main>
  );
};
