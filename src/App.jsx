import "./App.css";
import Colors from "./components/Colors";

const App = () => {
  const colorList = ["Red", "Green", "Blue", "Yellow"];

  return (
    <div>
      <h2>Color List</h2>
      <Colors items={colorList} />
    </div>
  );
};

export default App;
