import React, { useState } from "react";
import { connect } from "react-redux";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../Actions/counter";

const CounterRedux = (props) => {
  const increment = () => {
    props.dispatch(incrementAction());
  };

  const decrement = () => {
    props.dispatch(decrementAction());
  };

  const reset = () => {
    props.dispatch(resetAction());
  };

  return (
    <div>
      <h1> Counter App</h1>
      <h3> Count: {props.count}</h3>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}> Decrement</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(CounterRedux);
