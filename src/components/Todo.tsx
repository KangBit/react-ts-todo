import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { TodoContext, ITodo } from "./TodoList";

const Todo = (props: ITodo) => {
  const { todos, setTodos, setEditIdx } = useContext(TodoContext);

  const handleClickDeleteBtn = () => {
    const newTodo = todos.filter((itme) => {
      return itme.idx !== props.idx;
    });
    setTodos(newTodo);
  };

  const handleClickUpdateBtn = () => {
    setEditIdx(props.idx);
  };

  return (
    <div className="todo-item">
      <div>
        <p className="todo-title">{props.title}</p>
      </div>
      <div>
        <p className="todo-project">{props.project}</p>
      </div>
      <div className="btns-container">
        <button className="btn-delete" onClick={handleClickDeleteBtn}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="btn-update" onClick={handleClickUpdateBtn}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
