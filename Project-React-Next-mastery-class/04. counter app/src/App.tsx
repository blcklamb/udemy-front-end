import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller onControl={setCount} />
    </>
  );
}

export default App;
