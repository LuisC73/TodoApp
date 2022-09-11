function TodoRow({ task, toggleTask }) {
  return (
    <div className="todoApp__row">
      <div className="todoApp__check">
        <div
          className="todoApp__checkMark"
          onChange={() => toggleTask(task)}
        ></div>
      </div>
      <div className="todo__card">
        <p className="todoApp__p">{task.name}</p>
      </div>
    </div>
  );
}

export default TodoRow;
