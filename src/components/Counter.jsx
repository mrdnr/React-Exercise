import Display from "./Display";
import { useState, useEffect } from "react";

function Counter({ value, amount }) {
  const [count, setCount] = useState(value);

  const handleIncrement = () => {
    setCount(count + amount);
  };
  const handleDecrement = () => {
    setCount(count - amount);
  };
  const handleReset = () => {
    setCount(value);
  };
  useEffect(() => {
    console.log("Current value :", count);
  }, [count]);

  return (
    <div>
      <Display count={count} />
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
