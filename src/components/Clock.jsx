import React from "react";
import "./Clock.scss";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div className="clock">
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
