import React, { useContext } from 'react';
import { Context } from './UseReducer';


export default function UseContextExample() {
  const context = useContext(Context);
  return (
    <div>
      <button onClick={() => context.counterDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => context.counterDispatch('decrement')}>
        Decrement
      </button>
      <button onClick={() => context.counterDispatch('reset')}>Redet</button>
    </div>
  );
}
