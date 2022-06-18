import React, { useReducer, useState } from 'react';
import './style.css';

export default function App() {
  const [counter, dispatch] = useReducer(reducer, 0);
  const [count, setCount] = useState(0);

  function reducer(state, action) {
    console.log(action);
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        throw new Error(`action: ${action.type}`);
    }
  }

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
      <h1>Reducer Counter: {counter}</h1>
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
