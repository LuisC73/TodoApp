import { BsCheckLg } from "react-icons/bs";

function TodoRow({ task, toggleTask, done }) {
  const checkMark = (done) => {
    return (!done ? (
      <div className="todoApp__check">
        <div
          className="todoApp__checkMark"
          onClick={() => toggleTask(task)}
        ></div>
      </div>
    ) : (
      <div className="todoApp__check">
        <div
          className="todoApp__checkMark todoApp__checkMark--bg"
          onClick={() => toggleTask(task)}
        ><BsCheckLg className="todoApp__checkIcon"/></div>
        
      </div>
    ))
  };

  return (
    <div className="todoApp__row">
      {checkMark(done)}
      <div className="todo__card">
        <p className="todoApp__p">{task.name}</p>
      </div>
    </div>
  );
}

export default TodoRow;
