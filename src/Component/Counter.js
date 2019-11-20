import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <button
          onClick={() => {
            this.props.add();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            if (this.props.count == 0) {
              return 0;
            } else {
              this.props.sub();
            }
          }}
        >
          -
        </button>
        <div>{this.props.count}</div>
      </div>
    );
  }
}
