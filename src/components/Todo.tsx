import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

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
  const [title, setTitle] = useState<string>("");
  const [project, setProject] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    setTitle(props.title);
    setProject(props.project);
  }, [props]);

  const handleClickDeleteBtn = () => {
    props.deleteTodo(props.idx);
  };

  const handleClickUpdateBtn = () => {
    setIsEdit(true);
  };

  const handleClickSubmitBtn = () => {
    props.updateTodo({ idx: props.idx, title: title, project: project });
    setIsEdit(false);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeProject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject(e.target.value);
  };

  return (
    <div className="todo-item">
      <div>
        {isEdit ? (
          <input value={title} onChange={handleChangeTitle}></input>
        ) : (
          <p className="todo-title">{title}</p>
        )}
      </div>
      <div>
        {isEdit ? (
          <input value={project} onChange={handleChangeProject}></input>
        ) : (
          <p className="todo-project">{project}</p>
        )}
      </div>
      <div className="btns-container">
        {isEdit ? (
          <button onClick={handleClickSubmitBtn}>submit</button>
        ) : (
          <>
            <button className="btn-delete" onClick={handleClickDeleteBtn}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="btn-update" onClick={handleClickUpdateBtn}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
