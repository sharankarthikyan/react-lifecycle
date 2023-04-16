import React from "react";
import { Link } from "react-router-dom";

class Class extends React.Component {
  constructor() {
    super();
    console.log("Constructor");

    this.state = { counter: 0 };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      `getDerivedStateFromProps: Props - ${JSON.stringify(
        props
      )}, state - ${JSON.stringify(state)}`
    );

    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      `shouldComponentUpdate: nextProps - ${JSON.stringify(
        nextProps
      )}, nextState - ${JSON.stringify(nextState)}`
    );

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      `getSnapshotBeforeUpdate: prevProps - ${JSON.stringify(
        prevProps
      )}, prevState - ${JSON.stringify(prevState)}`
    );

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      `componentDidUpdate: prevProps - ${JSON.stringify(
        prevProps
      )}, prevState - ${JSON.stringify(prevState)}, snapshot - ${JSON.stringify(
        snapshot
      )}`
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");

    return (
      <>
        <Link to="/function">Function component</Link>
        <br />
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          counter - {this.state.counter}
        </button>
      </>
    );
  }
}

export default Class;
