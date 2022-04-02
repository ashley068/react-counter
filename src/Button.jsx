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

  render() {
    return (
      <div>
        {this.props.label === "increment" ? (
          <button className="counterBtn" onClick={this.increBtnClicked}>
            +
          </button>
        ) : (
          <button className="counterBtn" onClick={this.decreBtnClicked}>
            -
          </button>
        )}
      </div>
    );
  }
}

export default Button;
