// components/ChildComponent.js

import React, { useEffect } from 'react';

const ChildComponent = () => {

    console.log('Child component re-rendered with counter:');

  return (
    <div>
      <h2>Child Component</h2>
      <p>Received Counter:</p>
    </div>
  );
};

export default ChildComponent;
