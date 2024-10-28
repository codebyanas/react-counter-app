import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Counter App</h1>
      <div className="display-4 mb-3">{count}</div>
      <div>
        <button className="btn btn-primary mx-2" onClick={increment}>
          Increment
        </button>
        <button className="btn btn-danger mx-2" onClick={decrement}>
          Decrement
        </button>
        <button className="btn btn-secondary mx-2" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
