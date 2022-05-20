import React, { useContext, useEffect, useState } from 'react';
import {
  ITodo as EditTodoProp,
  useTodoDispatch,
} from '../contexts/TodoContext';

const EditTodo = (props: EditTodoProp) => {
  const dispatch = useTodoDispatch();

  const [title, setTitle] = useState<string>('');
  const [project, setProject] = useState<string>('');

  useEffect(() => {
    setTitle(props.title);
    setProject(props.project);
  }, []);

  const handleClickSubmitBtn = () => {
    const newTodo = { idx: props.idx, title, project };
    dispatch({ type: 'EDIT_TODO', payload: { todo: newTodo } });
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
