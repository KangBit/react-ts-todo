import { useReducer, useState } from "react";
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import Todo from "./Todo";
import { TodoContext, todoReducer, TodoState } from "../contexts/TodoContext";

const initState: TodoState = {
  todos: [
    { idx: 100, title: "todo-100", project: "project-100" },
    { idx: 101, title: "todo-101", project: "project-101" },
  ],
  newIdx: 1,
  editIdx: 0,
};

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initState);
  const { todos, editIdx } = state;

  const Items = () => {
    return todos.map((item) => {
      if (item.idx === editIdx) {
        return <EditTodo {...item}></EditTodo>;
      } else {
        return <Todo {...item}></Todo>;
      }
    });
  };

  return (
    <div className="todo-list-container">
      <TodoContext.Provider value={{ state, dispatch }}>
        {Items()}
        <CreateTodo />
      </TodoContext.Provider>
    </div>
  );
};

export default TodoList;
