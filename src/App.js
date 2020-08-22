import React, { Component } from "react";
import CounterList from "./components/CounterList";
import Navbar from "./components/Navbar";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <CounterList
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
  handleDelete = (componentId) => {
    const counters = this.state.counters.filter((c) => c.id !== componentId);
    this.setState({
      counters,
    });
  };

  handleReset = () => {
    console.log("Triggered");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    //Duplicate the counters array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //Create a new object with the given counter, directly changing
    //the counters array here will change the state, since it is the same array
    //,which we do not want.
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    if (counter.value > 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };
}
