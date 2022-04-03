import React from "react";
import "./style.css";
import Button from "./Button";
// import { createUseStyles } from "react-jss";

//css-in-js
// const useStyles = createUseStyles({
//   container: {
//     display: "grid",
//     gridtTemplateColumns: "repeat(2, 1fr)",
//     gridTemplateRows: "repeat(5, 1fr)",
//     width: "20%",
//     border: "1px solid black",
//   },
// });

class App extends React.Component {
  constructor() {
    super();
    this.state = { capacity: 99, message: "" };
  }

  // classes = useStyles();

  // display = (updatedCapacity) => {
  //   this.setState({ capacity: updatedCapacity });
  //   if (updatedCapacity >= 100) {
  //     this.setState({ message: "Max capacity is reached!" });
  //   } else {
  //     this.setState({ message: "" });
  //   }
  // };

  reset = () => {
    this.setState({ capacity: 0, message: "" });
  };

  increBtnClicked = () => {
    if (this.state.capacity < 100) {
      this.setState({ capacity: this.state.capacity + 1 });
    }
  };

  decreBtnClicked = () => {
    if (this.state.capacity > 0) {
      this.setState({ capacity: this.state.capacity - 1 });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="div1">
          <Button classes="reset" onClick={this.reset} label="reset"></Button>
          <div className="item capacity-label">
            <h2>Max Capacity:100</h2>
            <h1 className="display">{this.state.capacity}</h1>
            <h2>
              {this.state.capacity === 100 ? "Max capacity is reached!" : ""}
            </h2>
          </div>
        </div>
        <div className="item div2">
          <Button
            classes="counterBtn"
            onClick={this.decreBtnClicked}
            label="-"
          />
        </div>
        <div className="item div3">
          <Button
            classes="counterBtn"
            onClick={this.increBtnClicked}
            label="+"
          />
        </div>
        <div className="div4"></div>
      </div>
    );
  }
}

export default App;
