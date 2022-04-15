export interface ITodo {
  idx: number;
  title: string;
  project: string;
}

const Todo = (props: ITodo) => {
  return (
    <div className="todo-item">
      <div>
        <p className="todo-title">{props.title}</p>
      </div>
      <div>
        <p className="todo-project">{props.project}</p>
      </div>
    </div>
  );
};

export default Todo;
