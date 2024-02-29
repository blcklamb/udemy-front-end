import { useEffect, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";
import useUpdate from "./hooks/useUpdate";
import useInput from "./hooks/useInput";

function App() {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput();

  const onClickButton = (value: number) => {
    setCount((prev) => prev + value);
  };

  useUpdate(() => console.log("App 업데이트"));

  // 마운트 때만 동작하도록 적용하는 방법 - deps === []
  useEffect(() => {
    console.log("마운트");
  }, []);

  return (
    <>
      <h1>Simple Counter</h1>
      <section className="box">
        <input value={text} onChange={onChangeText} />
      </section>
      <Viewer count={count} />
      {count % 2 === 0 && <Even />}
      <Controller onControl={onClickButton} />
    </>
  );
}

export default App;
