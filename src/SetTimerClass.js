import React, { Component } from 'react';

export default class SetTimerClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount(){
    setInterval(this.timerCount, 1000)
  }
  componentWillUnmount() {
    clearInterval()
  }
  timerCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <p> your timer {this.state.count}</p>
      </div>
    );
  }
}
