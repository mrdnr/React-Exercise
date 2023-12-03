import { useState } from "react";
import Display from "./Display";

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
  
    return (
      <div>
        <Display count = {count}/>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  }

  export default Counter;