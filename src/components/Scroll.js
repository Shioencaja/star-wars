import React, { Component } from "react";

class Scroll extends Component {
  render() {
    return (
      <div
        style={{
          overflowY: "scroll",
          overflowX: "hidden",
          height: "60vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1em",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Scroll;
