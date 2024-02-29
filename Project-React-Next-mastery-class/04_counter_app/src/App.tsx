import { ChangeEvent, useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const onClickButton = (value: number) => {
    setCount((prev) => prev + value);
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    e.target && setText(e.target.value);
  };

  // 마운트 시 실행하지 않도록 하는 방법 - useRef
  const isMountRef = useRef(false);

  useEffect(() => {
    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    console.log("업데이트");
  });

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
