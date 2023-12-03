import "./App.css";
import Counter from "./components/Counter";


const App = () => {
  return (
    <div className="main">
      <Counter value={0} amount={2} />
    </div>
  );
};

export default App;