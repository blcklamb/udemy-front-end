import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value: number) => {
    setCount((prev) => prev + value);
  };
  return (
    <>
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller onControl={onClickButton} />
    </>
  );
}

export default App;
