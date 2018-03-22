import React, { Component } from "react";

class Time extends Component {
  constructor() {
    super();
  }
  render() {
    let d = new Date();

    let n = d.getTime();
    return (
      <div className="Time">
        <h1>{n}</h1>
      </div>
    );
  }
}

export default Time;
