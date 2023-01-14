import { Component } from "react";
import { Jumbotron } from "./components/Jumbotron";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isVisible: true };

    this.handleUnmount = this.handleUnmount.bind(this);
  }

  handleUnmount() {
    this.setState({ isVisible: false });
  }

  render() {
    return (
      <div className="container">
        {this.state.isVisible ? (
          <Jumbotron handleUnmount={this.handleUnmount} />
        ) : null}
      </div>
    );
  }
}
