import React, { useReducer } from 'react';
import ContextChild from './ContextChild';

export const Context = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export default function UseReducerFunction() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{ counterContext: count, counterDispatch: dispatch }}
    >
      <div>
        <p>Count - {count}</p>
        <ContextChild />
      </div>
    </Context.Provider>
  );
}
