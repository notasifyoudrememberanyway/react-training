import { Component } from "react";

export class Jumbotron extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="title">Hello, React!!</div>
        <div className="sub-title">
          This banner element is rendered using React and CSS.
        </div>
      </div>
    );
  }
}
