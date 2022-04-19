import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const CreateTodo = () => {
  const { state, dispatch } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [project, setProejct] = useState("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeProject = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProejct(e.target.value);
  };

  const handleClickCreateBtn = () => {
    let todo = { idx: state.newIdx, title: title, project: project };
    dispatch({ type: "ADD_TODO", payload: { todo } });
    setEmpty();
  };

  const handleClickCancelBtn = () => {
    setEmpty();
  };

  const setEmpty = () => {
    setTitle("");
    setProejct("");
  };

  return (
    <div className="create-todo-container">
      <label className="lbl-title">Title</label>
      <input
        className="input-title"
        value={title}
        onChange={handleChangeTitle}
      ></input>
      <label className="lbl-project">Project</label>
      <textarea
        className="input-project"
        value={project}
        onChange={handleChangeProject}
      ></textarea>
      <button className="btn-create" onClick={handleClickCreateBtn}>
        Create
      </button>
      <button className="btn-cancel" onClick={handleClickCancelBtn}>
        Cancel
      </button>
    </div>
  );
};

export default CreateTodo;
