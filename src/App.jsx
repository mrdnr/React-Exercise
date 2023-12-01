import "./App.css";
import Colors from "./components/Colors";

const App = () => {
  const colorObjects = [
    { id: 1, name: "Red" },
    { id: 2, name: "Green" },
    { id: 3, name: "Blue" },
    { id: 4, name: "Yellow" },
    { id: 5, name: "Purple" },
  ];

  return (
    <div>
      <h2>Color List</h2>
      <Colors items={colorObjects} />
    </div>
  );
};

export default App;
