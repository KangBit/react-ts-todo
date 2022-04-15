import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import Todo, { ITodo } from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { idx: 100, title: "todo-100", project: "project-100" },
    { idx: 101, title: "todo-101", project: "project-101" },
  ]);
  const [editIdx, setEditIdx] = useState<number | null>(null);

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
    setEditIdx(null);
  };

  const Items = () => {
    return todos.map((item) => {
      if (item.idx === editIdx) {
        return (
          <EditTodo
            idx={item.idx}
            title={item.title}
            project={item.project}
            updateTodo={updateTodo}
          ></EditTodo>
        );
      } else {
        return (
          <Todo
            idx={item.idx}
            title={item.title}
            project={item.project}
            deleteTodo={deleteTodo}
            setEditIdx={setEditIdx}
          ></Todo>
        );
      }
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
