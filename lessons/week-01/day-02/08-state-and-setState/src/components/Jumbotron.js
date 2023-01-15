import { Component } from "react";

export class Jumbotron extends Component {
  constructor(props) {
    super(props);

    // set your initial state in the constructor function
    this.state = { mode: "success" };

    // bond the this scope of the button handler to the this of the class
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    // change the state value of mode to dark or light
    this.setState({
      mode: this.state.mode === "success" ? "danger" : "success",
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="title">Hello, React!!</div>
        <div className="sub-title">
          This banner element is rendered using React and CSS.
        </div>
        <div className="p-3">
          <button
            className={`btn btn-${this.state.mode}`}
            onClick={this.handleButtonClick}
          >
            Toggle Button
          </button>
        </div>
      </div>
    );
  }
}
