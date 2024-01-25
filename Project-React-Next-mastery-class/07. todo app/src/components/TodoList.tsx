import { useEffect, useState } from "react";
import { Todo } from "../todoListData";

interface TodoListProps {
  data: Todo[];
  onUpdateTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoList = ({ data, onUpdateTodo, onDeleteTodo }: TodoListProps) => {
  const [filteredTodo, setFilteredTodo] = useState(data);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const onSearchTodo = (searchedTodo: string) => {
      const regex = new RegExp(searchedTodo);
      const filteredTodo = data.filter((ele) => regex.test(ele.title));
      setFilteredTodo(filteredTodo);
    };
    setFilteredTodo(data);
    onSearchTodo(searchKeyword);
  }, [data, searchKeyword]);

  return (
    <div>
      <input
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        placeholder="검색어를 입력하세요"
        className="search-input"
      />
      {filteredTodo.map((ele) => {
        const { id, title, date, isDone } = ele;

        return (
          <div key={id}>
            <input
              type="checkbox"
              checked={isDone}
              onChange={() => onUpdateTodo(id)}
            />
            <div>{title}</div>
            <div>{date}</div>
            <button type="button" onClick={() => onDeleteTodo(id)}>
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
