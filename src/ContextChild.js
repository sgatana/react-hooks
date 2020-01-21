import React from 'react';
import ContextExample from './ContextExample';
import UseContextExample from './UseContextExample';

export default function ContextChild() {
  return (
    <div>
      <ContextExample />
      <p>use context hook example</p>
      <UseContextExample />
    </div>
  );
}
