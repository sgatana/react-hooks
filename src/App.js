import React, { useState, useEffect } from 'react';
import './App.css';
// import SetName from './UseStateInObjectsDemo';
// import DemoArray from './UseStateInArraysDemo';
// import UseEffectsDemo from './UseEffectsDemo';
// import DataFetching from './DataFetching';
import UseReducerFunction from './UseReducer';

function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {/* <SetName /> */}
      {/* <DemoArray /> */}
      {/* <UseEffectsDemo /> */}
     <UseReducerFunction />
      {/* <DataFetching /> */}
    </div>
  );
}

export default App;
