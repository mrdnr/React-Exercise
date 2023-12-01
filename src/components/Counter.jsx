import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const counterStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: count === 0 ? 'yellow': count > 0 ? 'green' : 'red',
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <span style={counterStyle}>{count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
