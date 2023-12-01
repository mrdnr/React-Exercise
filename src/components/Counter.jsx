import { useState, useEffect, useRef } from "react";

const Counter = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);

  useEffect(() => {
    if (counter > initialValue) {
      directionRef.current = "up";
    } else if (counter < initialValue) {
      directionRef.current = "down";
    } else {
      directionRef.current = null;
    }

    if (directionRef.current !== null) {
      console.log(`Direction: ${directionRef.current}`);
    }
  }, [counter, initialValue]);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <p>Counter Value: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
