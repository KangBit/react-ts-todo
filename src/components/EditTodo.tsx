import React, { useEffect, useState } from "react";
import { ITodo } from "./Todo";

interface EditTodoProp extends ITodo {
  updateTodo: (todo: ITodo) => void;
}
const EditTodo = (props: EditTodoProp) => {
  const [title, setTitle] = useState<string>("");
  const [project, setProject] = useState<string>("");

  useEffect(() => {
    setTitle(props.title);
    setProject(props.project);
  }, []);

  const handleClickSubmitBtn = () => {
    props.updateTodo({ idx: props.idx, title: title, project: project });
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
        <input
          className="input-edit-title"
          value={title}
          onChange={handleChangeTitle}
        ></input>
      </div>
      <div>
        <input
          className="input-edit-project"
          value={project}
          onChange={handleChangeProject}
        ></input>
      </div>
      <div className="btns-container">
        <button onClick={handleClickSubmitBtn}>submit</button>
      </div>
    </div>
  );
};

export default EditTodo;
