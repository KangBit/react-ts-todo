import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';
import Todo from './Todo';
import { useTodoState } from '../contexts/TodoContext';

const TodoList = () => {
  const { todos, editIdx } = useTodoState();

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
      {Items()}
      <CreateTodo />
    </div>
  );
};

export default TodoList;
