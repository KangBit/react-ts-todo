import React, {
  createContext,
  Dispatch,
  FC,
  useContext,
  useReducer,
} from 'react';

export interface ITodo {
  idx: number;
  title: string;
  project: string;
}

export type TodoState = {
  todos: ITodo[];
  newIdx: number;
  editIdx: number;
};

type TodoAction =
  | { type: 'EDIT_START'; payload: { idx: number } }
  | { type: 'ADD_TODO'; payload: { todo: ITodo } }
  | { type: 'EDIT_TODO'; payload: { todo: ITodo } }
  | { type: 'DELETE_TODO'; payload: { idx: number } };

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  let newTodos: ITodo[];
  switch (action.type) {
    case 'EDIT_START':
      return {
        ...state,
        editIdx: action.payload.idx,
      };
    case 'ADD_TODO':
      newTodos = [...state.todos, action.payload.todo];
      return {
        ...state,
        todos: newTodos,
        newIdx: state.newIdx + 1,
      };
    case 'EDIT_TODO':
      newTodos = state.todos.map((item) => {
        if (item.idx === action.payload.todo.idx) {
          return action.payload.todo;
        } else {
          return item;
        }
      });
      return {
        ...state,
        todos: newTodos,
        editIdx: 0,
      };
    case 'DELETE_TODO':
      newTodos = state.todos.filter((item) => {
        return item.idx !== action.payload.idx;
      });
      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
};

const INITIAL_STATE: TodoState = {
  todos: [
    { idx: 100, title: 'todo-100', project: 'project-100' },
    { idx: 101, title: 'todo-101', project: 'project-101' },
  ],
  newIdx: 1,
  editIdx: 0,
};

const TodoStateContext = createContext<TodoState | null>(null);
const TodoDispatchContext = createContext<Dispatch<TodoAction> | null>(null);

export const TodoProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export function useTodoState() {
  const state = useContext(TodoStateContext);
  if (!state) throw new Error('Cannot find useTodoState');
  return state;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('Cannot find useTodoDispatch');
  return dispatch;
}
