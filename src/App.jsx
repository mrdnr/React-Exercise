import "./App.css";
import Counter from "./components/Counter";

const App = () => {

  return (
    <div>
      <h2>Counter  Example</h2>
      <Counter initialValue={0}/>
    </div>
  );
};

export default App;
