import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import Todo, { ITodo } from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

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
        <Todo
          idx={item.idx}
          title={item.title}
          project={item.project}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        ></Todo>
      );
    });
  };

  return (
    <div className="todo-list-container">
      {Items()}
      <CreateTodo addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
