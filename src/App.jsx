import "./App.css";
import { useState } from "react";

function Counter({ value, amount }) {
  const [count, setCount] = useState(value);

  const handleIncrement = () => {
    setCount(count + amount);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Counter</button>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Counter value={0} amount={5} />
    </div>
  );
};

export default App;