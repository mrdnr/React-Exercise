import { createRoot } from "react-dom";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.unstable_crateSyncRoot().render(
  <>
    <App />
  </>
);
