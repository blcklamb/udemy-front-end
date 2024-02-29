import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // callback이 다시 호출되거나 컴포넌트가 언마운트될 때 실행된다
    return () => {
      console.log("언마운트");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
