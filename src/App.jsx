import "./App.css";
import { useState } from "react";

function Display({count}){
  return <h2>Counter :{count}</h2>
}

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

const App = () => {
  return (
    <div>
      <Counter value={0} amount={2} />
    </div>
  );
};

export default App;