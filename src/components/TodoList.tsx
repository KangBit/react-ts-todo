import { createContext, SetStateAction, useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import Todo from "./Todo";

export interface ITodo {
  idx: number;
  title: string;
  project: string;
}

interface ITodoContext {
  todos: ITodo[];
  editIdx: number | null;
  setTodos: React.Dispatch<SetStateAction<ITodo[]>>;
  setEditIdx: React.Dispatch<SetStateAction<number | null>>;
}

export const TodoContext = createContext({} as ITodoContext);

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { idx: 100, title: "todo-100", project: "project-100" },
    { idx: 101, title: "todo-101", project: "project-101" },
  ]);
  const [editIdx, setEditIdx] = useState<number | null>(null);

  const Items = () => {
    return todos.map((item) => {
      if (item.idx === editIdx) {
        return (
          <EditTodo
            idx={item.idx}
            title={item.title}
            project={item.project}
          ></EditTodo>
        );
      } else {
        return (
          <Todo idx={item.idx} title={item.title} project={item.project}></Todo>
        );
      }
    });
  };

  return (
    <div className="todo-list-container">
      <TodoContext.Provider value={{ todos, editIdx, setTodos, setEditIdx }}>
        {Items()}
        <CreateTodo />
      </TodoContext.Provider>
    </div>
  );
};

export default TodoList;
