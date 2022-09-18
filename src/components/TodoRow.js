import { BsCheckLg, BsXLg } from "react-icons/bs";

function TodoRow({ task, toggleTask, done, theme }) {
  const checkMark = (done) => {
    return !done ? (
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
        >
          <BsCheckLg className="todoApp__checkIcon" />
        </div>
      </div>
    );
  };

  const deleteTask = () => {
    alert("en desarrollo");
  };

  return (
    <div className={!theme ? "todoApp__row" : "todoApp__row--light"}>
      {checkMark(done)}
      <div className="todoApp__card">
        <p className={!done ? "todoApp__p" : "todoApp__p--completed"}>
          {task.name}
        </p>
      </div>
      <BsXLg className="todoApp__close" onClick={deleteTask} />
    </div>
  );
}

export default TodoRow;
