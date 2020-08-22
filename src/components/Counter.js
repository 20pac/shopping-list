import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div>
        <span style={{ width: "40px" }} className={this.getBadgeClasses()}>
          {this.formatValue()}
        </span>
        <button
          onClick={() => this.props.handleIncrement(this.props.counter)}
          className="btn btn-success btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.handleDecrement(this.props.counter)}
          className="btn btn-danger btn-sm"
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          //also send the id of this component on clicking
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  formatValue = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses = () => {
    let classes = "badge m-4 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  };
}
