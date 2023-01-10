import { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleDecrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  handleReset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>React Counter</h1>
          <h2>Increment | Decrement | Reset</h2>
        </div>

        <div className="text-center">
          <h3>Counter: {this.state.count}</h3>
        </div>

        <div className="d-flex flex-wrap justify-content-between">
          <div>
            <button className="btn btn-success" onClick={this.handleIncrement}>
              Increment
            </button>
          </div>

          <div>
            <button className="btn btn-warning" onClick={this.handleReset}>
              Reset
            </button>
          </div>

          <div>
            <button className="btn btn-danger" onClick={this.handleDecrement}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    );
  }
}
