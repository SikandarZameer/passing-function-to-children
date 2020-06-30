import React, { Component } from "react";

class BetterNumberItem extends Component {
  handleRemove = evt => {
    console.log("INSIDE HANDLE REMOVE");
    this.props.remove(this.props.value);
  };
  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}

export default BetterNumberItem;
