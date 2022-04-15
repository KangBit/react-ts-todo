import { useContext, useState } from "react";
import { TodoContext } from "./TodoList";

const CreateTodo = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [project, setProejct] = useState("");
  const [idx, setIdx] = useState(0);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeProject = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProejct(e.target.value);
  };

  const handleClickCreateBtn = () => {
    let todo = { idx: idx, title: title, project: project };
    setTodos([...todos, todo]);
    setIdx(idx + 1);
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
