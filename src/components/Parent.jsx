// components/ParentComponent.js

import React, { useState, useEffect } from 'react';
import ChildComponent from './child';

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  // This effect will increment the counter every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Counter: {counter}</p>
      <ChildComponent    />
    </div>
  );
};

export default ParentComponent;
