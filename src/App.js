import React, { useReducer, useState } from 'react';
import './style.css';

const initialState = { counter: 0, numOfActions: 0 };

const reducer = (state, action) => ({
  counter: action.type === 'increment' ? state.counter + 1 : state.counter - 1,
  numOfActions: state.numOfActions + 1,
});

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(0);

  const onClick = (e) => {
    if (e.target.id === 'inc') {
      setCount(count + 1);
    }
    if (e.target.id === 'dec') {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Reducer Counter: {state.counter}</h1>
      <h1>Reducer Num of actions: {state.numOfActions}</h1>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>

      <h1>UseState Counter: {count}</h1>
      <button id="inc" onClick={onClick}>
        +
      </button>
      <button id="dec" onClick={onClick}>
        -
      </button>
    </>
  );
}
