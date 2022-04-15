import { createContext, SetStateAction } from "react";

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
