import { Component } from "react";

export class Jumbotron extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    // set your initial state in the constructor function
    this.state = { mode: "success", isVisible: true };

    // bond the this scope of the button handler to the this of the class
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // lifecycle method invoked after the component is rendered on the DOM
  componentDidMount() {
    console.log("componentDidMount");

    setTimeout(this.handleButtonClick, 2000);
  }

  // lifecycle method invoked before the component is removed from the DOM
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // lifecycle method invoked before any component update
  // returning true will trigger the re-render
  // returning false will not trigger the re-render
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");

    return true;
  }

  // lifecycle method invoked after any component update
  // access to previous props and state
  componentDidUpdate(previousProps, previousState) {
    console.log("componentDidUpdate");
    console.log("previousProps", previousProps);
    console.log("previousState", previousState);
    console.log("currentProps", this.props);
    console.log("currentState", this.state);
  }

  handleButtonClick() {
    // change the state value of mode to dark or light
    this.setState((state) => {
      return {
        mode: state.mode === "success" ? "danger" : "success",
      };
    });
  }

  render() {
    console.log("render");

    if (this.state.isVisible) {
      return (
        <div className="jumbotron" id="jumbotron">
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
          <div className="p-3">
            <button
              className={"btn btn-danger"}
              onClick={this.props.handleUnmount}
            >
              Umount Jumbotron
            </button>
          </div>
        </div>
      );
    }

    return null;
  }
}
