import React from 'react';
import { Context } from './UseReducer';

export default function ContextExample() {
  return (
    <Context.Consumer>
      {context => {
        return (
          <div>
            <button onClick={() => context.counterDispatch('increment')}>
              Increment
            </button>
            <button onClick={() => context.counterDispatch('decrement')}>
              Decrement
            </button>
            <button onClick={() => context.counterDispatch('reset')}>
              Redet
            </button>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
