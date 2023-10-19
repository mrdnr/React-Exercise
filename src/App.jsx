import "./App.css";
import { useState, useEffect } from "react";

function Display({count}){
  return <h2>Counter :{count}</h2>
}

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
  useEffect(()=>{
    console.log("Current value :", count)
  },[count])


  return (
    <div>
      <Display count = {count}/>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

const App = () => {
  return (
    <div className="main">
      <Counter value={0} amount={2} />
    </div>
  );
};

export default App;