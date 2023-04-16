import React from "react";
import { Link } from "react-router-dom";

class Class extends React.Component {
  /*
   * When a component is created, React automatically calls its constructor method,
   * passing any props that were provided to the component. If the component has a
   * constructor method, it should call the super method as its first line to ensure
   * that the component is properly initialized.
   */
  constructor() {
    super();
    console.log("Constructor");

    this.state = { counter: 0 };
  }

  /*
   * The purpose of getDerivedStateFromProps is to allow components to
   * synchronize their internal state with changes in their props.
   * When a component receives new props, it may need to update its internal
   * state to reflect those changes. getDerivedStateFromProps provides a way
   * to do this by computing and returning the new state based on the incoming props.
   */
  static getDerivedStateFromProps(props, state) {
    console.log(
      `getDerivedStateFromProps: Props - ${JSON.stringify(
        props
      )}, state - ${JSON.stringify(state)}`
    );

    return state;
  }

  /*
   * The purpose of shouldComponentUpdate is to provide a performance optimization
   * by allowing components to avoid unnecessary renders. By default, when a component's
   * props or state changes, React will always rerender the component and update the DOM.
   * However, in many cases, the changes may not affect the output of the component, and
   * thus a render is unnecessary.
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      `shouldComponentUpdate: nextProps - ${JSON.stringify(
        nextProps
      )}, nextState - ${JSON.stringify(nextState)}`
    );

    return true;
  }

  /*
   * The reason for using getSnapshotBeforeUpdate is to allow components
   * to persist some information about the state of the DOM before it is
   * changed, and then use that information to perform some specific
   * operations after the DOM has been updated.
   *
   * Another example is for animations or transitions.
   * getSnapshotBeforeUpdate can be used to capture the current positions
   * or sizes of elements before they are updated, so that we can smoothly
   * transition between the old and new values.
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      `getSnapshotBeforeUpdate: prevProps - ${JSON.stringify(
        prevProps
      )}, prevState - ${JSON.stringify(prevState)}`
    );

    return null;
  }

  /*
   * componentDidUpdate is typically used for side effects that need to be
   * performed after a component has been updated, such as fetching data
   * from a server, updating the component's internal state, or manually
   * updating the DOM.
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      `componentDidUpdate: prevProps - ${JSON.stringify(
        prevProps
      )}, prevState - ${JSON.stringify(prevState)}, snapshot - ${JSON.stringify(
        snapshot
      )}`
    );
  }

  /*
   * The componentDidMount method is called only once during the component's lifetime,
   * after the initial render. This means that it is an ideal place to perform tasks that
   *  need to happen only once, such as fetching data from a server, setting up event
   * listeners, or initializing third-party libraries.
   *
   * One common use case for componentDidMount is to make API requests to fetch data that
   * the component needs to display. Once the data is fetched, it can be stored in the
   * component's state, triggering a re-render of the component with the updated data.
   */
  componentDidMount() {
    console.log("componentDidMount");
  }

  /*
   * This method is typically used for cleanup tasks, such as cancelling timers,
   * removing event listeners, or clearing any subscriptions that the component
   * has created during its lifetime.
   */
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  /*
   * The render method is responsible for returning a tree of React elements
   * that represents the component's output. This output can be any valid JSX
   * expression, including HTML-like tags, React components, or JavaScript expressions.
   *
   * It's important to note that the render method should be a pure function that does
   * not modify the component's props or state. Instead, it should only return the
   * desired output based on the current props and state.
   *
   */
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
