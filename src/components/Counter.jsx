import Display from "./Display";
import { useState } from "react";

function Counter({ value, amount }) {
    const [count, setCount] = useState(value);
  
    const handleIncrement = () => {
      setCount(count + amount);
    };
  
    return (
      <div>
        <Display count = {count}/>
        <button onClick={handleIncrement}>Counter</button>
      </div>
    );
  }

  export default Counter;