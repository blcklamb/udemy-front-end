import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Todo, todoListData } from "./todoListData";
import { getLowerUUID } from "./utils/getLowerUUID";

function App() {
  const [todoList, setTodoList] = useState(todoListData);

  const today = new Date();

  const onSubmitTodo = (todoTitle: string) => {
    const newTodo: Todo = {
      title: todoTitle,
      date: today.toLocaleDateString(),
      isDone: false,
      id: getLowerUUID(),
    };

    setTodoList((prev) => [newTodo, ...prev]);
  };

  const onCompleteTodo = (id: string) => {
    const checkedTodo = todoList.map((ele) => {
      if (ele.id === id) return { ...ele, isDone: !ele.isDone };
      return ele;
    });
    setTodoList(checkedTodo);
  };

  const onDeleteTodo = (id: string) => {
    const deletedTodo = todoList.filter((ele) => ele.id != id);
    setTodoList(deletedTodo);
  };

  return (
    <>
      <h2>{today.toDateString()}</h2>
      <TodoInput onSubmit={onSubmitTodo} />
      <h3>Todos</h3>
      <TodoList
        data={todoList}
        onUpdateTodo={onCompleteTodo}
        onDeleteTodo={onDeleteTodo}
      />
    </>
  );
}

export default App;
