import { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: props.initialValue };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleIncrement() {
    this.setState((state) => state.count + 1);
  }

  handleDecrement() {
    this.setState((state) => (state.count > 0 ? state.count - 1 : 0));
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <section className="jumbotron">
        <div className="alert alert-primary" role="alert">
          <h3>Counter: {this.state.count}</h3>
        </div>
        <div className="counter-controls">
          <button
            className="btn btn-success counter-control"
            onClick={this.handleIncrement}
          >
            Increment
          </button>
          <button
            className="btn btn-warning counter-control"
            onClick={this.handleReset}
          >
            Reset
          </button>
          <button
            className="btn btn-danger counter-control"
            onClick={this.handleDecrement}
          >
            Decrement
          </button>
        </div>
      </section>
    );
  }
}
