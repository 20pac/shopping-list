import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Your List</span>
        <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>
      </nav>
    );
  }
}

export default Navbar;
