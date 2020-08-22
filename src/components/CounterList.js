import React, { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component {
  render() {
    return (
      <>
        <button
          onClick={this.props.handleReset}
          className="btn btn-danger btn-sm"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            // id={counter.id}
            // value={counter.value}
            //Pass all the data in one object
            counter={counter}
            onDelete={this.props.handleDelete}
            handleDecrement={this.props.handleDecrement}
            handleIncrement={this.props.handleIncrement}
          />
        ))}
      </>
    );
  }
}

export default CounterList;
