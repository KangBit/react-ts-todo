import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import Todo, { ITodo } from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { idx: 1, title: "todo-1", project: "project-1" },
    { idx: 2, title: "todo-2", project: "project-2" },
  ]);

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (idx: number) => {
    const newTodo = todos.filter((itme) => {
      return itme.idx !== idx;
    });
    setTodos(newTodo);
  };

  const updateTodo = (todo: ITodo) => {
    const newTodo = todos.map((item) => {
      if (item.idx === todo.idx) {
        return todo;
      } else {
        return item;
      }
    });
    setTodos(newTodo);
  };

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
