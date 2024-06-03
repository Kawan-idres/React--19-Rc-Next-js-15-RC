# Next.js Project with React 19 and Next.js 15 RC

This project demonstrates the new features of React 19 RC and Next.js 15 RC, specifically the optimization that prevents unnecessary re-renders in child components when the parent state changes.

## Features

- **Efficient Re-renders**: Child components won't re-render unless necessary, even if the parent state changes.
- **Simplified Code**: No need for `React.memo` to optimize performance.
- **Enhanced Performance**: Out-of-the-box improvements for smoother and faster applications.

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- **components/ParentComponent.js**: Parent component that manages state and triggers re-renders.
- **components/ChildComponent.js**: Child component that does not re-render unnecessarily.
- **pages/index.js**: Entry point for the Next.js application.

## Example Code

### Parent Component

```jsx
// components/ParentComponent.js

import React, { useState, useEffect } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Counter: {counter}</p>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;

```