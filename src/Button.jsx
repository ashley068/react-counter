import React from "react";
import "./style.css";

class Button extends React.Component {
  increBtnClicked = () => {
    if (this.props.capacity < 100) {
      this.props.clicked(this.props.capacity + 1);
    }
  };
  decreBtnClicked = () => {
    if (this.props.capacity > 0) {
      this.props.clicked(this.props.capacity - 1);
    }
  };

  handleClick =
    this.props.label === "+" ? this.increBtnClicked : this.decreBtnClicked;

  render() {
    return (
      <div>
        <button className="counterBtn" onClick={this.handleClick}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Button;
