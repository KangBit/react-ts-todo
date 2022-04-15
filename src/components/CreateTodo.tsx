const CreateTodo = () => {
  return (
    <div className="create-todo-container">
      <label className="lbl-title">Title</label>
      <input className="input-title"></input>
      <label className="lbl-project">Project</label>
      <textarea className="input-project"></textarea>
      <button className="btn-create">Create</button>
      <button className="btn-cancel">Cancel</button>
    </div>
  );
};

export default CreateTodo;
