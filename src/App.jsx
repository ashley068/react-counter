import React from "react";
import "./style.css";
import Button from "./Button";

class App extends React.Component {
  state = { capacity: 0, message: "" };

  display = (updatedCapacity) => {
    this.setState({ capacity: updatedCapacity });
    if (updatedCapacity >= 100) {
      this.setState({ message: "Max capacity is reached!" });
    } else {
      this.setState({ message: "" });
    }
  };

  reset = () => {
    this.setState({ capacity: 0, message: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="div1">
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
          <div className="item capacity-label">
            <h2>Max Capacity:100</h2>
            <h1 className="display">{this.state.capacity}</h1>
            <h2>{this.state.message}</h2>
          </div>
        </div>
        <div className="item div2">
          <Button
            clicked={this.display}
            capacity={this.state.capacity}
            label={"-"}
          />
        </div>
        <div className="item div3">
          <Button
            clicked={this.display}
            capacity={this.state.capacity}
            label={"+"}
          />
        </div>
        <div className="div4"></div>
      </div>
    );
  }
}

export default App;
