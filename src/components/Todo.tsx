import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export interface ITodo {
  idx: number;
  title: string;
  project: string;
}

interface TodoProjs extends ITodo {
  deleteTodo: (idx: number) => void;
  updateTodo: (todo: ITodo) => void;
}

const Todo = (props: TodoProjs) => {
  const handleClickDeleteBtn = () => {
    props.deleteTodo(props.idx);
  };

  const handleClickUpdateBtn = () => {
    // props.updateTodo({ idx: props.idx, title: "updated", project: "updated" });
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
