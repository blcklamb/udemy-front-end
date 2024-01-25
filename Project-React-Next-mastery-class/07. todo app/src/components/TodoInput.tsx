import { useState } from "react";

interface TodoInputProps {
  onSubmit: (todoTitle: string) => void;
}

const TodoInput = ({ onSubmit }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const onClickAddButton = () => {
    onSubmit(inputValue);
    setInputValue("");
  };

  const onPressEnter = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      setTimeout(() => {
        onSubmit(inputValue);
        setInputValue("");
      }, 100);
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="새로운 Todo..."
        onKeyDown={onPressEnter}
      />
      <button type="button" onClick={onClickAddButton}>
        추가
      </button>
    </div>
  );
};

export default TodoInput;
