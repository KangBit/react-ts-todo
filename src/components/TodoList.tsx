import { useState } from "react";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { idx: 1, title: "todo-1", project: "project-1" },
    { idx: 2, title: "todo-2", project: "project-2" },
  ]);

  const Items = () => {
    return todos.map((item) => {
      return (
        <Todo idx={item.idx} title={item.title} project={item.project}></Todo>
      );
    });
  };
  return (
    <div className="todo-list-container">
      {Items()}
      <CreateTodo />
    </div>
  );
};

export default TodoList;
